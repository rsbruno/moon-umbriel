import React from "react";
import { Keyboard, StatusBar } from "react-native";

import { KeyBoardWrapperFormsComponent } from "@components/KeyBoardWrapperFormsComponent/KeyBoardWrapperFormsComponent";
import { HeaderComponent } from "@components/HeaderComponent/HeaderComponent";
import { Buttons } from "@components/Buttons";
import { Inputs } from "@components/Inputs";
import { themes } from "@themes/index";

import { useForm } from 'react-hook-form'

import {
    TouchableContainer, Content, FooterContainer, ForgotPasswordButton, ForgotPasswordText, FormContainer,
    LogoContainer, FieldsContainer
} from "./SignInStyles";

export function SignInScreen() {
    const onBlurAll = () => Keyboard.dismiss()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user: '',
            password: ''
        }
    });

    const onSubmit = data => console.log(data);

    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
        />
        <TouchableContainer onPress={onBlurAll}>
            <Content>
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
                            />
                            <Inputs.Password control={control} name="password" placeholder='senha' />
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