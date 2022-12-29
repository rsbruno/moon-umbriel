import React, { useState } from "react";
import { TextInputProps } from "react-native";
import BaseInputComponent from "../Base/BaseInputComponent/BaseInputComponent";
import BaseWrapperComponent from "../Base/BaseWrapperComponent/BaseWrapperComponent";
import { Control } from 'react-hook-form'

interface ITextInputComponentsProps extends TextInputProps {
    control: Control<any, any>;
    name: string;
}

export default function TextInputComponents({ control, name, ...props }: ITextInputComponentsProps) {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    return <>
        <BaseWrapperComponent focus={isFocus} customLabel={props.placeholder}>
            <BaseInputComponent {...props} name={name} control={control} onStateFocus={focus => setIsFocus(focus)} />
        </BaseWrapperComponent>
    </>
}