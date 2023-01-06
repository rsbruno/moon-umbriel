import React, { ReactNode } from 'react'
import { ScrollView, ScrollViewProps } from 'react-native'
import { SwipeStep } from './StepStyle'

interface StepComponentProps extends ScrollViewProps {
    children: ReactNode,
    horizontalPadding?: number;
}

function StepComponent({ children, horizontalPadding, ...rest }: StepComponentProps) {
    return <>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} {...rest}>
            <SwipeStep horizontalPadding={0}>
                <>{children}</>
            </SwipeStep>
        </ScrollView>
    </>
}

StepComponent.displayName = 'StepComponent';

export default StepComponent;