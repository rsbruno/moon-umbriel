import React from "react";

import { TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./WrapperButtonStyles";

import { ThemeProvider } from 'styled-components'

interface IBaseWrapperButtonProps extends IComponentGenericButton, TouchableOpacityProps { }

export function BaseWrapperButton({ children, theme, ...props }: IBaseWrapperButtonProps) {
    return <>
        <ThemeProvider theme={{ buttonsmode: theme }} >
            <ContainerButton {...props}>
                {children}
            </ContainerButton>
        </ThemeProvider>

    </>


}