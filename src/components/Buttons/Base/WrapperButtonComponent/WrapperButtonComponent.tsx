import React from "react";

import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import styled, { ThemeProvider } from 'styled-components'

import { ContainerButton } from "./WrapperButtonStyles";

import { ButtonTextStyles } from "@themes/theming/ButtonTextsStyles";
import { themes } from "@themes/index";

interface IBaseWrapperButtonProps extends IComponentGenericButton, TouchableOpacityProps {}

export function BaseWrapperButton({ children, theme, isLoading, ...props }: IBaseWrapperButtonProps) {
    const CustomActivityIndicator = styled(({ style }) => {
        if (style.length > 0)
            return React.cloneElement(<ActivityIndicator />, { size: 30, color: style[0].color })
        else return React.cloneElement(<ActivityIndicator /> as any, { size: 30, color: themes.colors.DARK_500 })
    })`
        ${ButtonTextStyles}
    `;

    return <>
        <ThemeProvider theme={{ buttonsmode: theme }} >
            <ContainerButton {...props}>
                {isLoading ? <CustomActivityIndicator /> : children}
            </ContainerButton>
        </ThemeProvider>

    </>


}