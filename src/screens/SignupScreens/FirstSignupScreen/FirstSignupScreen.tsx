import { Buttons } from "@components/Buttons";
import { HeaderComponent } from "@components/HeaderComponent/HeaderComponent";
import { themes } from "@themes/index";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Dimensions, Keyboard, StatusBar, TouchableOpacityProps } from "react-native";
import {
    FormContainer, SignUpContainer,
    FooterContainer, HeaderStepsScreen, StepContainer, StepName, StepIndicator, ContainerAvatarAndNickName, ContainerAvatar, ContainerUserNameInput, ContainerInputsName
} from "./FirstSignupStyles";

import * as yup from "yup";

import { Feather } from '@expo/vector-icons';
import { yupResolver } from "@hookform/resolvers/yup";
import { KeyBoardSafeAreaComponent } from "@components/KeyBoardSafeAreaComponent/KeyBoardSafeAreaComponent";
import { useAnimationState, View } from "moti";
import { TermsComponent } from "./TermsComponent/TermsComponent";
import { Inputs } from "@components/Inputs";
import { Swiper } from "@components/Swiper";

interface FormSignUpData {
    username: string;
    firstname: string;
    surname: string;
    email: string;
    password: string;
    passwordconfirm: string;
    acceptterms: string;
}

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
    acceptterms: yup.string().when('$stepNumber', (stepNumber: number, schema: any) =>
        stepNumber === 1 ? schema.test(
            'is-checked',
            'Os termos de uso não foram aceitos',
            (value: string) => value === 'checked',
        ).required('Você precisa revisar os termos') : schema
    ),
}).required();

export function FirstSignupScreen() {
    const [stepNumber, setStepNumber] = useState<number>(0);

    const swiperRef = useRef<SwiperComponentRefs>(null)

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormSignUpData>({
        defaultValues: { "acceptterms": "unchecked", "email": "rsbruno.cdc@gmail.com", "firstname": "Bruno", "password": "123456", "passwordconfirm": "123456", "surname": "Santos", "username": "rsbruno" },
        resolver: yupResolver(schema),
        context: { stepNumber }
    });

    const onSubmit = (data: any) => {
        Keyboard.dismiss()
        if (isValid) swiperRef.current.toNextSwiper()
        // console.log(data)
    }

    const onFirstSteps = () => {
        handleSubmit(() => { })().then(() => {
            if (isValid) swiperRef.current.toPrevSwiper()
        })
    }

    const onTermsSteps = () => {
        handleSubmit(() => { })().then(() => {
            if (isValid) swiperRef.current.toNextSwiper()
        })
    }

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
        />
        <KeyBoardSafeAreaComponent>
            <SignUpContainer>
                <HeaderComponent headerTitle='CADASTRO' />
                <HeaderStepsScreen>
                    <ScreenStepContainer label="Primeiros Passos" theme={stepNumber === 0 ? 'focus' : 'unfocus'} onPress={onFirstSteps} />
                    <ScreenStepContainer label="Termos e Condições" theme={stepNumber === 1 ? 'focus' : 'unfocus'} onPress={onTermsSteps} />
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
                        <Inputs.CheckBox control={control} name='acceptterms' />
                    </Swiper.Step>
                </Swiper.Container>
                <FooterContainer>
                    <Buttons.WithCustomIcon
                        IconComponent={<Feather
                            name="arrow-right"
                            size={24}
                            color={isValid ? themes.colors.LIGHT_500 : themes.colors.DARK_500}
                        />}
                        theme={isValid ? 'dark' : 'disabled'}
                        onPress={handleSubmit(onSubmit)}
                        label={stepNumber === 0 ? 'Próximo Passo' : 'Criar Conta'}
                        iconPosition='right'
                    // disabled={!isValid}
                    />
                </FooterContainer>
            </SignUpContainer>
        </KeyBoardSafeAreaComponent>
    </>
}