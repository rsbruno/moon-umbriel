import React from "react";
import { StatusBar } from "react-native";

import { HeaderComponent } from "@components/HeaderComponent/HeaderComponent";
import { Buttons } from "@components/Buttons";
import { Inputs } from "@components/Inputs";
import { themes } from "@themes/index";
import { Container, Content, FooterContainer, ForgotPasswordButton, ForgotPasswordText, LogoContainer, SignInContainer } from "./SignInStyles";

export function SignInScreen() {
    return <>
        <Container>
            <StatusBar
                backgroundColor={themes.colors.BACKGROUND_900}
                barStyle='dark-content'
            />
            <HeaderComponent headerTitle="Entrar" hideLeftContent />
            <Content>
                <LogoContainer>
                    {/* COLOCAR LOGO AQUI */}
                </LogoContainer>
                <SignInContainer>
                    <Inputs.TextInput placeholder="usuário ou email" />
                    <Inputs.Password placeholder="senha" />
                    <Buttons.SimpleButton label="ENTRAR" />
                    <ForgotPasswordButton>
                        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
                    </ForgotPasswordButton>
                </SignInContainer>
                <FooterContainer>
                    <Buttons.WithLabelAndIcon />
                </FooterContainer>
            </Content>
        </Container>
    </>
}