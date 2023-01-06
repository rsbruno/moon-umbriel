import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { OnboardingRoutes } from './onBoarding.routes';
import { useAuth } from '@contexts/authContext';
import { routes } from './routes';

export function AppRoutes() {
    const userContext = useAuth()
    const navigation = useNavigation()

    useEffect(() => {
        if (userContext.user === null) {
            userContext.initUserAuthAsyncStorage().then(user => {
                if (user === null) navigation.navigate(routes.onBoarding.SIGN_IN_SCREEN as never)
                else if (user.incompleteUser) navigation.navigate(routes.onBoarding.WELCOME_SCREEN as never)
                else console.log('deve ir para home do app')
            })
        } else console.log('deve ir para home do app')
    }, []);

    return (
        <OnboardingRoutes />
    );
}