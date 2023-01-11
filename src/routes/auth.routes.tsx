import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@screens/HomeScreen/HomeScreen';
import { routes } from './routes';
import { ComponentTabbarApp } from '@components/ComponentTabBarApp/ComponentTabBarApp';

const Tab = createBottomTabNavigator();

export function AuthRoutes() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    header: () => <></>
                }}
                tabBar={props => <ComponentTabbarApp />}
            >
                <Tab.Screen name={routes.authApp.STATISTICS_SCREEN} component={HomeScreen} />
            </Tab.Navigator>
        </>
    );
}