import React from 'react'
import { TouchableOpacityProps } from "react-native";
import styled from 'styled-components';

import { BaseWrapperButton } from "../Base/WrapperButtonComponent/WrapperButtonComponent";
import { ButtonTextStyles } from "@themes/theming/ButtonTextsStyles";
import { themes } from "@themes/index";
import { ReactNode } from "react";
import { IconContainer } from './OnlyIconStyles';

interface IOnlyIconComponentProps extends IComponentGenericButton, TouchableOpacityProps {
    iconPosition?: "left" | "right" | "normal";
    IconComponent: ReactNode;
}

export default function OnlyIconComponent({ iconPosition = 'normal', IconComponent, ...props }: IOnlyIconComponentProps) {
    const ButtonIconComponent = styled(({ style }) => {
        if (style.length > 0)
            return React.cloneElement(IconComponent as any, { color: style[0].color })
        else return React.cloneElement(IconComponent as any, { color: themes.colors.DARK_500 })
    })`
        ${ButtonTextStyles}
    `;

    return <BaseWrapperButton {...props}>
        <IconContainer theme={{ iconPosition }}>
            <ButtonIconComponent />
        </IconContainer>
    </BaseWrapperButton>
}