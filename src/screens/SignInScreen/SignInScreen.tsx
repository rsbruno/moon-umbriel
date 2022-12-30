import React, { useEffect, useState } from "react";
import { Keyboard, StatusBar } from "react-native";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import * as yup from "yup";

import { KeyBoardWrapperFormsComponent } from "@components/KeyBoardWrapperFormsComponent/KeyBoardWrapperFormsComponent";
import { HeaderComponent } from "@components/HeaderComponent/HeaderComponent";
import { Buttons } from "@components/Buttons";
import { Inputs } from "@components/Inputs";
import { themes } from "@themes/index";

import {
    TouchableContainer, Content, FooterContainer, ForgotPasswordButton, ForgotPasswordText, FormContainer,
    LogoContainer, FieldsContainer
} from "./SignInStyles";
import { useAuth } from "@contexts/authContext";
import { Modal } from "@components/Modal";

interface FormSignInData {
    user: string;
    password: string;
}

const schema = yup.object({
    user: yup.string()
        .required("Informe seu Usuário ou Email")
        .when('$userIsEmail', (isEmail: boolean, schema: any) =>
            isEmail ? schema.email("O email informado não é válido") : schema
        ),
    password: yup.string()
        .required("Informe a sua senha")
}).required();

export function SignInScreen() {

    const { signIn } = useAuth()

    const onBlurAll = () => Keyboard.dismiss()

    const [userIsEmail, setUserIsEmail] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { control, handleSubmit, watch, formState: { errors } } = useForm<FormSignInData>({
        defaultValues: {
            user: 'rsbruno',
            password: '123456',
        },
        resolver: yupResolver(schema),
        context: { userIsEmail }
    });

    const onSubmit = data => {
        setIsLoading(true)
        signIn(data).finally(() => setIsLoading(false))
    };

    const userValue = watch('user')

    useEffect(() => setUserIsEmail(() => userValue && userValue.includes('@')), [userValue])

    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
            hidden
        />



        <TouchableContainer onPress={onBlurAll}>
            <Content>
                <Modal.Loading visible={isLoading}
                    animationType='fade'


                />

                <HeaderComponent headerTitle='Entrar' hideLeftContent />
                <KeyBoardWrapperFormsComponent>
                    <FormContainer>
                        <LogoContainer></LogoContainer>
                        <FieldsContainer>
                            <Inputs.TextInput
                                control={control}
                                name="user"
                                placeholder='usuário ou email'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                errors={errors}
                            />
                            <Inputs.Password control={control} errors={errors} name="password" placeholder='senha' />
                            <Buttons.SimpleButton label='ENTRAR' onPress={handleSubmit(onSubmit)} />
                            <ForgotPasswordButton>
                                <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                            </ForgotPasswordButton>
                        </FieldsContainer>
                        <FooterContainer>
                            <Buttons.WithLabelAndIcon />
                        </FooterContainer>
                    </FormContainer>
                </KeyBoardWrapperFormsComponent>
            </Content>
        </TouchableContainer>
    </>
}