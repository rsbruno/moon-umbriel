import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@screens/SignInScreen/SignInScreen';
import { routes } from './routes';

const Stack = createNativeStackNavigator();

export function OnboardingRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <></>
            }}
        >
            <Stack.Screen name={routes.onBoarding.SIGN_IN_SCREEN} component={SignInScreen} />
        </Stack.Navigator>
    );
}