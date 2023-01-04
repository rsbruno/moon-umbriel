import { useAnimationState } from 'moti'
import React, { useEffect } from 'react'
import { CheckBoxbackground, CheckBoxText, CheckBoxWrapper, Container } from './CheckBoxStyles'

type ICheckBoxStatus = "unchecked" | "checked"

interface CheckboxComponentProps {
    onChange?: (status: ICheckBoxStatus) => void;
    initialValue?: ICheckBoxStatus
}

export default function CheckboxComponent({ onChange, initialValue }: CheckboxComponentProps) {
    const animationState = useAnimationState({
        unchecked: {
            opacity: 0
        },
        checked: {
            opacity: 1
        },
    })

    const toggleAnimation = (status?: ICheckBoxStatus) => {
        animationState.transitionTo(current => status || (current == "checked" ? "unchecked" : "checked"))
        onChange && onChange(animationState.current)
    }

    useEffect(() => {
        if (initialValue && initialValue === 'checked') toggleAnimation('checked')
        else if (initialValue && initialValue === 'unchecked') toggleAnimation('unchecked')
    }, [initialValue]);

    return <>
        <Container onPress={() => toggleAnimation()}>
            <CheckBoxWrapper>
                <CheckBoxbackground
                    state={animationState}
                    transition={{
                        type: 'timing',
                        duration: 200,
                    }} />
            </CheckBoxWrapper>
            <CheckBoxText>Eu aceito os Termos e quero continuar</CheckBoxText>
        </Container>
    </>


}