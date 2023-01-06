import { AppRoutes } from '@routes/index.routes';
import React, { useCallback } from 'react';


import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, RedHatText_700Bold, RedHatText_500Medium, RedHatText_400Regular } from '@expo-google-fonts/red-hat-text';
import { AuthProvider } from '@contexts/authContext';
import { NavigationContainer } from '@react-navigation/native';


SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    RedHatText_700Bold,
    RedHatText_500Medium,
    RedHatText_400Regular
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}