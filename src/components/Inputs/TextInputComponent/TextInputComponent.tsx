import React from "react";
import { TextInputProps } from "react-native";
import { Container, InputComponent } from "./TextInputStyles";

interface ITextInputComponentsProps extends TextInputProps {

}

export default function TextInputComponents({ ...props }: ITextInputComponentsProps) {
    return <>
        <Container>
            <InputComponent {...props} />
        </Container>
    </>
}