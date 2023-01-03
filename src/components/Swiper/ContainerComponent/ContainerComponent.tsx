import { useAnimationState } from 'moti'
import React, { Children, forwardRef, ReactNode, useEffect, useImperativeHandle, useState } from 'react'
import { Dimensions } from 'react-native'
import { SwipeContainer } from './ContainerStyles'

interface ContainerComponentProps {
    children: ReactNode,
    onCurrentSwiper?: (curent: number) => void;
}

interface ICurrentAnimationState {
    type: "toNextSwiper" | "toPrevSwiper" | "initialState";
    displacement: number;
    pageStep: number
}

const ContainerComponent = forwardRef((props: ContainerComponentProps, ref) => {
    const { children, onCurrentSwiper } = props
    const [currentAnimation, setCurrentAnimation] = useState<ICurrentAnimationState>({ type: "initialState", displacement: 0, pageStep: 0 });

    useImperativeHandle(ref, () => {
        return {
            toNextSwiper,
            toPrevSwiper
        };
    }, []);

    const toNextSwiper = () => {
        setCurrentAnimation(prev => {
            const limitUpdate = Children.toArray(children).length - 1
            const pageStep = prev.pageStep < limitUpdate ? prev.pageStep + 1 : prev.pageStep
            const displacement = Dimensions.get('screen').width * pageStep
            return ({ type: "toNextSwiper", displacement, pageStep })
        })
    }
    const toPrevSwiper = () => {
        setCurrentAnimation(prev => {
            const pageStep = prev.pageStep > 0 ? prev.pageStep - 1 : prev.pageStep
            const displacement = Dimensions.get('screen').width * pageStep
            return ({ type: "toPrevSwiper", displacement, pageStep })
        })
    }

    const animationState = useAnimationState({
        initialState: {
            left: 0
        },
        toNextSwiper: {
            left: (Dimensions.get('screen').width * currentAnimation.pageStep) * -1
        },
        toPrevSwiper: {
            left: (Dimensions.get('screen').width * currentAnimation.pageStep)
        },
    })

    useEffect(() => {
        const everySteps = Children.toArray(children).every((child: any) => child.type.displayName === 'StepComponent')
        if (!everySteps) console.error("Um Swiper só deve conter StepsComponents como filhos")
    }, [children])

    useEffect(() => {
        onCurrentSwiper && onCurrentSwiper(currentAnimation.pageStep)
        animationState.transitionTo(currentAnimation.type)
    }, [currentAnimation.type]);

    return <>
        <SwipeContainer
            state={animationState}
            transition={{
                type: 'timing',
                duration: 350,
            }}
            childNumber={Children.toArray(children).length}
        >
            {children}
        </SwipeContainer>
    </>
});

export default ContainerComponent;