import React, { useRef, useState } from "react";
import { Keyboard, StatusBar, TouchableOpacityProps } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Feather } from '@expo/vector-icons';
import { useForm } from "react-hook-form";
import * as yup from "yup";

import {
    SignUpContainer, FooterContainer, HeaderStepsScreen, StepContainer, StepName, StepIndicator,
    ContainerAvatarAndNickName, ContainerAvatar, ContainerUserNameInput, ContainerInputsName
} from "./FirstSignupStyles";

import { ComponentSafeKeyBoard } from "@components/ComponentSafeKeyBoard/ComponentSafeKeyBoard";
import { ComponentHeader } from "@components/ComponentHeader/ComponentHeader";
import { TermsComponent } from "./TermsComponent/TermsComponent";
import { Buttons } from "@components/Buttons";
import { Inputs } from "@components/Inputs";
import { Swiper } from "@components/Swiper";
import { themes } from "@themes/index";
import { userService } from "@services/userService";
import { STATUS_CODE } from "@services/api";
import { useAuth } from "@contexts/authContext";
import { useNavigation } from "@react-navigation/native";
import { routes } from "@routes/routes";

interface FormSignUpData extends IPayloadUserStore { }
interface ScreenStepContainerProps extends TouchableOpacityProps {
    label: string;
    theme: 'focus' | 'unfocus';
}

const ScreenStepContainer = ({ theme, label, ...rest }: ScreenStepContainerProps) => {
    return <>
        <StepContainer {...rest}>
            <StepName theme={{ mode: theme }}>{label}</StepName>
            <StepIndicator theme={{ mode: theme }} />
        </StepContainer>
    </>
}

const schema = yup.object({
    username: yup.string().required("Campo obrigatório!"),
    firstname: yup.string().required("Campo obrigatório!"),
    surname: yup.string().required("Campo obrigatório!"),
    email: yup.string().email('Este email não é válido').required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
    passwordconfirm: yup.string().required("Campo obrigatório!")
        .oneOf([yup.ref('password'), null], 'As senhas não conferem'),
}).required();

enum STEPS {
    FORM_STEP = 0,
    TERM_STEP = 1
}

export function FirstSignupScreen() {
    const useAuthContext = useAuth()
    const navigation = useNavigation()
    const [stepNumber, setStepNumber] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [termsConfirmed, setTermsConfirmed] = useState<"checked" | "unchecked">("unchecked");

    const swiperRef = useRef<IRefsComponentSwipper>(null)

    const { control, handleSubmit, formState: { errors, isValid }, getValues } = useForm<FormSignUpData>({
        resolver: yupResolver(schema),
        context: { stepNumber }
    });

    const onFirstSteps = () => {
        swiperRef.current.toPrevSwiper()
    }

    const onTermsSteps = () => {
        handleSubmit(() => { })().then(() => {
            if (isValid) swiperRef.current.toNextSwiper()
        })
    }

    const handleThemeButtonSubmit = () => {
        switch (stepNumber) {
            case 0:
                return isValid ? 'dark' : 'disabled'
            default:
                return 'simple'
        }
    }

    const isFormStep = (positive: any, negative: any) => stepNumber === STEPS.FORM_STEP ? positive : negative

    const onPressButtonWithIcon = () => {
        Keyboard.dismiss()
        handleSubmit(() => { })().then((props) => {
            if (stepNumber === STEPS.FORM_STEP && isValid) swiperRef.current.toNextSwiper()
            else swiperRef.current.toPrevSwiper()
        })
    }

    const onpressStoreNewUser = async () => {
        Keyboard.dismiss()
        if (isValid && termsConfirmed === 'checked') {
            setIsLoading(true)
            const payload = getValues()
            const { status, data } = await userService.storeSimpleUser(payload)
            if (status === STATUS_CODE.OK) {
                const userAuthenticated = useAuthContext.signInWithExistentingToken(data)
                if (userAuthenticated) navigation.navigate(routes.onBoarding.WELCOME_SCREEN as never)
            }
            setIsLoading(false)
        }
    }

    const onPressCanGoBack = () => {
        if (navigation.canGoBack()) navigation.goBack()
    }

    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
        />
        <ComponentSafeKeyBoard>
            <SignUpContainer>
                <ComponentHeader headerTitle='CADASTRO' onPressLeftIcon={onPressCanGoBack} hideRightContent />
                <HeaderStepsScreen>
                    <ScreenStepContainer label="Primeiros Passos" theme={stepNumber === STEPS.FORM_STEP ? 'focus' : 'unfocus'} onPress={onFirstSteps} />
                    <ScreenStepContainer label="Termos e Condições" theme={stepNumber === STEPS.TERM_STEP ? 'focus' : 'unfocus'} onPress={onTermsSteps} />
                </HeaderStepsScreen>
                <Swiper.Container ref={swiperRef} onCurrentSwiper={current => setStepNumber(current)}>
                    <Swiper.Step>
                        <ContainerAvatarAndNickName>
                            <ContainerAvatar>
                                <Feather name="user" size={26} color={themes.colors.DARK_500} />
                            </ContainerAvatar>
                            <ContainerUserNameInput>
                                <Inputs.TextInput control={control} name='username' errors={errors} placeholder='Usuário' removeMargin />
                            </ContainerUserNameInput>
                        </ContainerAvatarAndNickName>
                        <ContainerInputsName>
                            <Inputs.TextInput control={control} name='firstname' errors={errors} placeholder='Nome' size={48.5} />
                            <Inputs.TextInput control={control} name='surname' errors={errors} placeholder='Sobrenome' size={48.5} />
                        </ContainerInputsName>
                        <Inputs.TextInput control={control} name='email' errors={errors} placeholder='Email' />
                        <Inputs.Password control={control} name='password' errors={errors} placeholder='Senha' />
                        <Inputs.Password control={control} name='passwordconfirm' errors={errors} placeholder='Senha Novamente' />
                    </Swiper.Step>
                    <Swiper.Step>
                        <TermsComponent />
                        <Inputs.CheckBox onChange={status => setTermsConfirmed(status)} initialValue="unchecked" />
                    </Swiper.Step>
                </Swiper.Container>
                <FooterContainer>
                    <Buttons.WithCustomIcon
                        IconComponent={<Feather
                            name={isFormStep('arrow-right', 'arrow-left')}
                            size={24}
                        />}
                        iconPosition={isFormStep('right', 'left')}
                        label={isFormStep('Avançar', 'Voltar')}
                        theme={handleThemeButtonSubmit()}
                        onPress={onPressButtonWithIcon}
                        size={isFormStep(100, 48.5)}
                    />
                    {stepNumber === STEPS.TERM_STEP && <>
                        <Buttons.SimpleButton
                            theme={termsConfirmed === 'checked' ? 'dark' : 'disabled'}
                            size={48.5} label="Criar Conta"
                            onPress={onpressStoreNewUser}
                            isLoading={isLoading}
                        />
                    </>}
                </FooterContainer>
            </SignUpContainer>
        </ComponentSafeKeyBoard>
    </>
}