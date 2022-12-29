import { useAnimationState } from "moti";
import React, { ReactNode, useEffect } from "react";

import { BaseContainer, ContainerLabel, ContainerText, ErrorText, ErrorView } from "./BaseWrapperStyle";

interface IBaseWrapperComponentProps {
    children: ReactNode,
    focus: boolean,
    customLabel?: string,
    errors: any,
    name: string
}

export default function BaseWrapperComponent({ children, focus, errors, name, customLabel }: IBaseWrapperComponentProps) {
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

    return <BaseContainer>
        {customLabel && <ContainerLabel state={animationState}>
            <ContainerText>{customLabel}</ContainerText>
        </ContainerLabel>}
        <>{children}</>
        <ErrorView>
            {errors && errors[name] && <ErrorText>{errors[name].message}</ErrorText>}
        </ErrorView>
    </BaseContainer >
}