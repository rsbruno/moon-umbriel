import { Buttons } from '@components/Buttons'
import { themes } from '@themes/index'
import React, { useRef, useState } from 'react'
import { StatusBar, Text } from 'react-native'
import { HeaderLayout, LayoutContent, LayoutFooter, LayoutStepIndicator, OnboardingLayout } from './OnboardingLayoutStyles'

import { Feather } from '@expo/vector-icons';
import { Swiper } from '@components/Swiper'

type IStateIndicator = 'unVisited' | 'visited' | 'finished'

enum STATE_INDICATOR {
    unVisited = 'unVisited',
    visited = 'visited',
    finished = 'finished',
}

export function OnboardingLayoutComponent() {
    const [stateIdicator, setStateIdicator] = useState<IStateIndicator[]>(['visited', 'unVisited', 'unVisited', 'unVisited', 'unVisited']);
    const [stepNumber, setStepNumber] = useState<number>(0);
    const swiperRef = useRef<IRefsComponentSwipper>(null)

    const updateIndicator = (index: number) => {
        setStepNumber(index)
        setStateIdicator((states) => states.map((_, key) => {
            if (index === key) return 'visited'
            else if (index > key) return 'finished'
            return 'unVisited'
        }))
    }

    const onPressNextStep = () => {
        if (swiperRef.current) swiperRef.current.toNextSwiper()
    }

    const onPressPrevStep = () => {
        if (swiperRef.current) swiperRef.current.toPrevSwiper()
    }


    return <>
        <StatusBar
            backgroundColor={themes.colors.BACKGROUND_900}
            barStyle='dark-content'
        />
        <OnboardingLayout>
            <HeaderLayout>
                {stateIdicator.map((state, key) => <LayoutStepIndicator key={key} theme={{ idicatormode: state }} />)}
            </HeaderLayout>
            <LayoutContent>
                <Swiper.Container ref={swiperRef} onCurrentSwiper={current => updateIndicator(current)}>
                    <Swiper.Step>
                        <Text>1</Text>
                    </Swiper.Step>
                    <Swiper.Step>
                        <Text>2</Text>
                    </Swiper.Step>
                    <Swiper.Step>
                        <Text>3</Text>
                    </Swiper.Step>
                    <Swiper.Step>
                        <Text>4</Text>
                    </Swiper.Step>
                    <Swiper.Step>
                        <Text>5</Text>
                    </Swiper.Step>
                </Swiper.Container>
            </LayoutContent>
            <LayoutFooter>
                <Buttons.WithCustomIcon
                    IconComponent={<Feather
                        name={'arrow-left'}
                        size={24}
                    />}
                    visibility={stepNumber > 0 ? 'visible' : 'hidden'}
                    onPress={onPressPrevStep}
                    iconPosition='left'
                    label='Anterior'
                    theme='simple'
                    size={48.5}
                />
                <Buttons.WithCustomIcon
                    IconComponent={<Feather
                        name={'arrow-right'}
                        size={24}
                    />}
                    onPress={onPressNextStep}
                    iconPosition='right'
                    label='Próximo'
                    theme='dark'
                    size={48.5}
                />
            </LayoutFooter>
        </OnboardingLayout>
    </>
}