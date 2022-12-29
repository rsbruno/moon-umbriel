import { useAnimationState } from "moti";
import React, { ReactNode, useEffect } from "react";
import { BaseContainer, ContainerLabel, ContainerText } from "./BaseWrapperStyle";

interface IBaseWrapperComponentProps {
    children: ReactNode,
    focus: boolean,
    customLabel?: string
}

export default function BaseWrapperComponent({ children, focus, customLabel }: IBaseWrapperComponentProps) {
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
    </BaseContainer>
}