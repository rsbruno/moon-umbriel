import React, { useState } from "react";
import { TextInputProps } from "react-native";
import BaseInputComponent from "../Base/BaseInputComponent/BaseInputComponent";
import BaseWrapperComponent from "../Base/BaseWrapperComponent/BaseWrapperComponent";

interface ITextInputComponentsProps extends TextInputProps { }

export default function TextInputComponents({ ...props }: ITextInputComponentsProps) {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    return <>
        <BaseWrapperComponent focus={isFocus} customLabel={props.placeholder}>
            <BaseInputComponent {...props} onStateFocus={focus => setIsFocus(focus)} />
        </BaseWrapperComponent>
    </>
}