import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { ButtonHidePassword } from "./PasswordStyles";
import { Ionicons } from '@expo/vector-icons';
import { themes } from "@themes/index";
import BaseWrapperComponent from "../Base/BaseWrapperComponent/BaseWrapperComponent";
import BaseInputComponent from "../Base/BaseInputComponent/BaseInputComponent";

interface IPasswordComponentsProps extends TextInputProps { }

export default function PasswordComponents({ ...props }: IPasswordComponentsProps) {
    const [nameIcon, setNameIcon] = useState<any>("ios-eye-outline");
    const [isFocus, setIsFocus] = useState<boolean>(false);

    function toggleIconInput() {
        setNameIcon(name => name === "ios-eye-outline" ? "ios-eye-sharp" : "ios-eye-outline")
    }

    return <>
        <BaseWrapperComponent focus={isFocus} customLabel={props.placeholder}>
            <BaseInputComponent
                {...props}
                secureTextEntry={nameIcon !== "ios-eye-sharp"}
                onStateFocus={focus => setIsFocus(focus)}
            />
            <ButtonHidePassword onPress={toggleIconInput}>
                <Ionicons name={nameIcon} size={32} color={themes.colors.DARK_200} />
            </ButtonHidePassword>
        </BaseWrapperComponent>
    </>
}