import React from "react";
import { TouchableOpacityProps } from 'react-native'

import { BaseWrapperButton } from "../Base/WrapperButtonComponent/WrapperButtonComponent";
import { FullButtonText } from "./SimpleButtonStyles";

interface ISimpleButtonComponentProps extends IComponentGenericButton, TouchableOpacityProps {
    label: string
}

export default function SimpleButtonComponent({ label, ...props }: ISimpleButtonComponentProps) {
    return <BaseWrapperButton {...props}>
        <FullButtonText>{label}</FullButtonText>
    </BaseWrapperButton>
}
