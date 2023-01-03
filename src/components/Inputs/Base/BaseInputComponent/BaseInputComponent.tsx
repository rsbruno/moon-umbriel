import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { InputComponent } from "./BaseInputStyles";
import { Controller, useForm, Control } from 'react-hook-form'

interface ITextInputComponentsProps extends TextInputProps {
    onStateFocus?: (focus: boolean) => void;
    control: Control<any, any>;
    name: string;
}

export default function BaseInputComponent({ onStateFocus, control, name, ...props }: ITextInputComponentsProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [placeHolder, setPlaceHolder] = useState<string>(props.placeholder);

    const onFocusEvent = () => {
        onStateFocus && onStateFocus(true)
        setPlaceHolder('')
    }

    const onBlurEvent = (onBlur: any) => {
        onBlur();
        onStateFocus && onStateFocus(inputValue.length > 0);
        setPlaceHolder(props.placeholder)
    }

    const onChangeTextEvent = (value: string, callBack: (...event: any[]) => void) => {
        callBack(value);
        setInputValue(value);
    }

    return <>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <InputComponent
                    {...props}
                    onFocus={onFocusEvent}
                    onBlur={() => onBlurEvent(onBlur)}
                    onChangeText={event => onChangeTextEvent(event, onChange)}
                    value={value}
                    placeholder={placeHolder}
                />
            )}
            name={name}
        />


    </>
}