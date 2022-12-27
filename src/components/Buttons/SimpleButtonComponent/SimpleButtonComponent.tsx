import React from "react";
import { FullButton, FullButtonText } from "./SimpleButtonStyles";

interface ISimpleButtonComponentProps {
    label: string
}

export default function SimpleButtonComponent({ label }: ISimpleButtonComponentProps) {
    return <FullButton>
        <FullButtonText>{label}</FullButtonText>
    </FullButton>
}