import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingRoutes } from './onBoarding.routes';

export function AppRoutes() {
    return (
        <NavigationContainer>
            <OnboardingRoutes />
        </NavigationContainer>
    );
}