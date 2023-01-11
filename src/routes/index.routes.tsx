import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FirstSignupScreen } from '@screens/FirstSignupScreen/FirstSignupScreen';
import { WelcomeScreen } from '@screens/Onboarding/WelcomeScreen/WelcomeScreen';
import { SignInScreen } from '@screens/SignInScreen/SignInScreen';
import { useAuth } from '@contexts/authContext';
import { AuthRoutes } from './auth.routes';
import { routes } from './routes';

const Stack = createNativeStackNavigator();



export function AppRoutes() {
    const userContext = useAuth()
    const navigation = useNavigation()

    useEffect(() => {
        if (userContext.user === null) {
            // userContext.initUserAuthAsyncStorage().then(user => {
            //     if (user === null) navigation.navigate(routes.publics.SIGN_IN_SCREEN as never)
            //     else if (user.incompleteUser) navigation.navigate(routes.onBoarding.WELCOME_SCREEN as never)
            //     else console.log('deve ir para home do app')
            // })
        } else console.log('deve ir para home do app')
    }, []);

    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    header: () => <></>
                }}
                initialRouteName={routes.authApp.HOME_SCREEN}
            >

                <Stack.Group>
                    <Stack.Screen name={routes.authApp.HOME_SCREEN} component={AuthRoutes} />
                </Stack.Group>

                <Stack.Group>
                    <Stack.Screen name={routes.onBoarding.WELCOME_SCREEN} component={WelcomeScreen} />
                </Stack.Group>


                <Stack.Group>
                    <Stack.Screen name={routes.publics.SIGN_IN_SCREEN} component={SignInScreen} />
                    <Stack.Screen name={routes.publics.FIRST_SIGN_UP_SCREEN} component={FirstSignupScreen} />
                </Stack.Group>
            </Stack.Navigator>

        </>
    );
}