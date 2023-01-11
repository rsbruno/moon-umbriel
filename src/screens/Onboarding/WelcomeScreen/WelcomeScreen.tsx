import React, { ReactNode, useRef, useState } from 'react'
import { StatusBar } from 'react-native'
import {
    FigureContainer, FooterContainer, NavigationContainer, NavigationStep, StepContainer, WelcomeContainer,
    WelcomeSubTitle, WelcomeTitle
} from './WelcomeStyles'

import WelcomIfitSVG from '@assets/svgs/womanifit.svg'
import BikeIfitSVG from '@assets/svgs/bikeifit.svg'
import { Buttons } from '@components/Buttons'
import { Feather } from '@expo/vector-icons';
import { Swiper } from '@components/Swiper'
import { themes } from '@themes/index'
import { useNavigation } from '@react-navigation/native'
import { routes } from '@routes/routes'

enum STEPS {
    FIRST = 0,
    SECOND = 1,
}

interface StepContentProps {
    Illustration: ReactNode;
    title: string;
    subTitle?: string;
}

const StepContent = ({ Illustration, title, subTitle }: StepContentProps) => {
    return <>
        <StepContainer>
            <FigureContainer>{Illustration}</FigureContainer>
            <WelcomeTitle>{title}</WelcomeTitle>
            {subTitle && <WelcomeSubTitle>{subTitle}</WelcomeSubTitle>}
        </StepContainer>
    </>
}

export function WelcomeScreen() {
    const swiperRef = useRef<IRefsComponentSwipper>(null)
    const navigation = useNavigation()

    const [stepNumber, setStepNumber] = useState<number>(0);

    const handlenavStyle = (stepNumb: number) => {
        return stepNumber == stepNumb ? 'actived' : 'normal'
    }

    const onpressNextStep = () => {
        if (stepNumber === STEPS.FIRST) {
            if (swiperRef.current) {
                swiperRef.current.toNextSwiper()
            }
        } else navigation.navigate(routes.authApp.HOME_SCREEN as never)
    }

    const onPressBackStep = () => {
        if (swiperRef.current) {
            swiperRef.current.toPrevSwiper()
        }
    }

    return <>
        <StatusBar
            backgroundColor={themes.colors.PRIMARY_500}
            barStyle='light-content'
        />
        <WelcomeContainer>
            <Swiper.Container ref={swiperRef} onCurrentSwiper={current => setStepNumber(current)}>
                <Swiper.Step horizontalPadding={0}>
                    <StepContent
                        Illustration={<WelcomIfitSVG height='100%' />}
                        title={`Monitore facilmente${'\n'}suas atividades${'\n'}físicas e dieta`}
                    />
                </Swiper.Step>
                <Swiper.Step horizontalPadding={0}>
                    <StepContent
                        Illustration={<BikeIfitSVG height='100%' />}
                        title={`Monte um plano de\ntreino e dieta para\nficar em forma...`}
                        subTitle={`Termine agora mesmo o seu\ncadastro para continuar\nutilizar o app!`}
                    />
                </Swiper.Step>
            </Swiper.Container>
            <NavigationContainer>
                <NavigationStep theme={{ navmode: handlenavStyle(STEPS.FIRST) }} />
                <NavigationStep theme={{ navmode: handlenavStyle(STEPS.SECOND) }} />
            </NavigationContainer>
        </WelcomeContainer>
        <FooterContainer>
            <Buttons.OnlyIcon
                IconComponent={<Feather
                    name={'arrow-left'}
                    size={24}
                />}
                visibility={stepNumber === STEPS.FIRST ? 'hidden' : 'visible'}
                onPress={onPressBackStep}
                iconPosition='normal'
                sizeUnity='px'
                theme='dark'
                size={50}
            />
            <Buttons.WithCustomIcon
                IconComponent={<Feather
                    name={'arrow-right'}
                    size={24}
                />}
                label={stepNumber === STEPS.SECOND ? 'Vamos Começar' : ''}
                sizeUnity={stepNumber === STEPS.SECOND ? '%' : 'px'}
                size={stepNumber === STEPS.SECOND ? 80 : 50}
                onPress={onpressNextStep}
                iconPosition='right'
                theme='dark'
            />
        </FooterContainer>
    </>
}