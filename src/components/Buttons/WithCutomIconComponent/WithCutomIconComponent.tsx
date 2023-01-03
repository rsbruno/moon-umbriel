import React, { ReactNode } from "react";
import { ContainerButton, IconContainer, LabelButton } from "./WithCutomIconStyles";

import Logo from '../../../assets/google.png'
import { TouchableOpacityProps } from "react-native";

interface ISimpleButtonComponentProps extends TouchableOpacityProps {
    label: string;
    iconPosition?: "left" | "right" | "normal";
    IconComponent: ReactNode;
    theme: 'dark' | 'disabled'
}


export default function WithLabelAndIconComponent({ label, iconPosition = 'normal', IconComponent, theme, ...props }: ISimpleButtonComponentProps) {
    return <ContainerButton theme={{ mode: theme }} {...props}>
        <LabelButton theme={{ mode: theme }}>{label}</LabelButton>
        <IconContainer theme={{ iconPosition }}>
            <>{IconComponent}</>
        </IconContainer>
    </ContainerButton>
}