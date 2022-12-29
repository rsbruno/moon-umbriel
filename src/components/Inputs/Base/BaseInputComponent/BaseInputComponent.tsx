import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { InputComponent } from "./BaseInputStyles";

interface ITextInputComponentsProps extends TextInputProps {
    onStateFocus?: (focus: boolean) => void
}

export default function BaseInputComponent({ onStateFocus, ...props }: ITextInputComponentsProps) {
    const [inputValue, setInputValue] = useState<string>('');

    const onFocusEvent = () => onStateFocus && onStateFocus(true)
    const onBlurEvent = () => onStateFocus && onStateFocus(inputValue.length > 0)
    const onChangeTextEvent = (value: string) => setInputValue(value)

    return <>
        <InputComponent
            {...props}
            onChangeText={onChangeTextEvent}
            onFocus={onFocusEvent}
            onBlur={onBlurEvent}
        />
    </>
}