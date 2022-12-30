import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingRoutes } from './onBoarding.routes';
import { AuthProvider } from '@contexts/authContext';

export function AppRoutes() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <OnboardingRoutes />
            </AuthProvider>
        </NavigationContainer>
    );
}