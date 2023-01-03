import { useAnimationState } from 'moti'
import React, { useEffect } from 'react'
import { Control, Controller } from 'react-hook-form'
import { TouchableOpacity } from 'react-native';
import { CheckBoxbackground, CheckBoxText, CheckBoxWrapper, Container } from './CheckBoxStyles'

interface CheckboxComponentProps {
    control: Control<any, any>;
    name: string;
}

export default function CheckboxComponent({ control, name }: CheckboxComponentProps) {


    const animationState = useAnimationState({
        unchecked: {
            opacity: 0
        },
        checked: {
            opacity: 1
        },
    })

    const toggleAnimation = (onChange: (...event: any[]) => void) => {
        animationState.transitionTo(current => current == "checked" ? "unchecked" : "checked")
        onChange(animationState.current)
    }

    const handleInitialAnimation = (current: "unchecked" | "checked", onChange: (...event: any[]) => void) => {
        if (current !== animationState.current) animationState.transitionTo(current)
        onChange(current)
        console.log(current)
    }

    return <>
        <Controller
            control={control}
            render={({ field: { onChange, value, } }) => {
                return (
                    <Container
                        onLayout={() => handleInitialAnimation(value, onChange)}
                        onPress={() => toggleAnimation(onChange)}
                    >
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
                )
            }}
            name={name}
        />
    </>


}