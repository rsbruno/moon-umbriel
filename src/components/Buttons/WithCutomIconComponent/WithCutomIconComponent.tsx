import React, { ComponentType, ReactNode, useEffect } from "react";
import { ContainerButton, IconContainer, LabelButton } from "./WithCutomIconStyles";

import { TouchableOpacityProps } from "react-native";
import styled from 'styled-components';

import { BaseWrapperButton } from "../Base/WrapperButtonComponent/WrapperButtonComponent";
import { ButtonTextStyles } from "@themes/theming/ButtonTextsStyles";
import { themes } from "@themes/index";

interface ISimpleButtonComponentProps extends IComponentGenericButton, TouchableOpacityProps {
    label: string;
    iconPosition?: "left" | "right" | "normal";
    IconComponent: ReactNode;
}

export default function WithLabelAndIconComponent({ label, iconPosition = 'normal', IconComponent, ...props }: ISimpleButtonComponentProps) {
    const ButtonIconComponent = styled(({ style }) => {
        if (style.length > 0)
            return React.cloneElement(IconComponent as any, { color: style[0].color })
        else return React.cloneElement(IconComponent as any, { color: themes.colors.DARK_500 })
    })`
        ${ButtonTextStyles}
    `;

    return <BaseWrapperButton {...props}>
        <LabelButton>{label}</LabelButton>
        <IconContainer theme={{ iconPosition }}>
            <ButtonIconComponent />
        </IconContainer>
    </BaseWrapperButton>
}