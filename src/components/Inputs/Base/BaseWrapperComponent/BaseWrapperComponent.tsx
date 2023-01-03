import { useAnimationState } from "moti";
import React, { ReactNode, useEffect, useState } from "react";
import { boolean } from "yup";

import { BaseContainer, ContainerLabel, ContainerText, ErrorText, ErrorView } from "./BaseWrapperStyle";

interface IBaseWrapperComponentProps {
    children: ReactNode;
    focus: boolean;
    customLabel?: string;
    errors: any;
    name: string;
    removeMargin?: boolean;
    size?: number
}

export default function BaseWrapperComponent({ children, focus, errors, name, removeMargin, size, customLabel }: IBaseWrapperComponentProps) {
    const [themeMode, setThemeMode] = useState<string>('normal');

    const animationState = useAnimationState({
        focus: {
            opacity: 1,
            top: -12
        },
        blur: {
            opacity: 0,
            top: -8
        }
    })

    useEffect(() => animationState.transitionTo(focus ? "focus" : "blur"), [focus])

    useEffect(() => {
        if (errors[name]) setThemeMode('error')
        else setThemeMode('normal')
    }, [errors[name]]);

    return <BaseContainer removeMargin={removeMargin} size={size} theme={{ mode: themeMode }}>
        {customLabel && <ContainerLabel state={animationState}>
            <ContainerText theme={{ mode: themeMode }}>{customLabel}</ContainerText>
        </ContainerLabel>}
        <>{children}</>
        <ErrorView>
            {errors && errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
        </ErrorView>
    </BaseContainer >
}