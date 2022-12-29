import React from "react";
import { TouchableOpacityProps } from 'react-native'
import { FullButton, FullButtonText } from "./SimpleButtonStyles";

interface ISimpleButtonComponentProps extends TouchableOpacityProps {
    label: string
}

export default function SimpleButtonComponent({ label, ...props }: ISimpleButtonComponentProps) {
    return <FullButton {...props}>
        <FullButtonText>{label}</FullButtonText>
    </FullButton>
}