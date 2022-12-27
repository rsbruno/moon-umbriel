import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { ButtonHidePassword, Container, InputComponent } from "./PasswordStyles";
import { Ionicons } from '@expo/vector-icons';
import { themes } from "@themes/index";

interface IPasswordComponentsProps extends TextInputProps {}

export default function PasswordComponents({ ...props }: IPasswordComponentsProps) {
    const [nameIcon, setNameIcon] = useState<any>("ios-eye-outline");

    function toggleIconInput() {
        setNameIcon(name => name === "ios-eye-outline" ? "ios-eye-sharp" : "ios-eye-outline")
    }

    return <>
        <Container>
            <InputComponent {...props} secureTextEntry={nameIcon !== "ios-eye-sharp"} />
            <ButtonHidePassword onPress={toggleIconInput}>
                <Ionicons name={nameIcon} size={32} color={themes.colors.DARK_200} />
            </ButtonHidePassword>
        </Container>
    </>
}