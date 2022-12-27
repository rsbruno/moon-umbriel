import { AppRoutes } from '@routes/index.routes';
import React, { useCallback } from 'react';


import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, RedHatText_700Bold_Italic } from '@expo-google-fonts/red-hat-text';


SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    RedHatText_700Bold_Italic,
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
      <AppRoutes />
    </View>
  );
}