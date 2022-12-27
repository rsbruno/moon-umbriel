import { themes } from '@themes/index'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    background: ${themes.colors.BACKGROUND_900};
`

export const Content = styled.View`
    flex: 1;
    padding: 0 25px;
`

export const LogoContainer = styled.View`
    height: 30%;
`

export const SignInContainer = styled.View`
    height: 50%;
    padding: 25px 0;
    align-items: flex-end;
`

export const FooterContainer = styled.View`
    height: 20%;
    justify-content: flex-end;
    padding-bottom: 5%;
`

export const ForgotPasswordButton = styled.TouchableOpacity`
    width: 100%;
    margin-top: 8%;
`

export const ForgotPasswordText = styled.Text`
    font-family: ${themes.font.family.TITLE_MEDIUM};
    font-size: ${themes.font.size.NORMAL}px;
    text-decoration: underline;
    text-align: center;
    color: ${themes.colors.DARK_200};
`