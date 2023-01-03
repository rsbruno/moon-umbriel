import React, { useState } from "react";
import { TextInputProps } from "react-native";

import BaseWrapperComponent from "../Base/BaseWrapperComponent/BaseWrapperComponent";
import BaseInputComponent from "../Base/BaseInputComponent/BaseInputComponent";

interface ITextInputComponentProps extends TextInputAdditionalProps, TextInputProps { }

export default function TextInputComponent({ control, name, errors, ...props }: ITextInputComponentProps) {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    return <>
        <BaseWrapperComponent errors={errors} name={name} focus={isFocus} customLabel={props.placeholder} {...props}>
            <BaseInputComponent {...props} name={name} control={control} onStateFocus={focus => setIsFocus(focus)} />
        </BaseWrapperComponent>
    </>
}