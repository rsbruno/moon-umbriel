import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@screens/SignInScreen/SignInScreen';
import { routes } from './routes';
import { FirstSignupScreen } from '@screens/SignupScreens/FirstSignupScreen/FirstSignupScreen';
import { WelcomeScreen } from '@screens/Onboarding/WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

export function OnboardingRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                header: () => <></>
            }}
            initialRouteName={routes.onBoarding.SIGN_IN_SCREEN}
        >
            <Stack.Screen name={routes.onBoarding.SIGN_IN_SCREEN} component={SignInScreen} />
            <Stack.Screen name={routes.onBoarding.FIRST_SIGN_UP_SCREEN} component={FirstSignupScreen} />
            <Stack.Screen name={routes.onBoarding.WELCOME_SCREEN} component={WelcomeScreen} />
        </Stack.Navigator>
    );
}