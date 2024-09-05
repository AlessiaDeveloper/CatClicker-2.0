import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'
import * as NavigationBar from "expo-navigation-bar";


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
const [fontsLoaded, error] = useFonts({"Luckiest Guy": require("../assets/fonts/LuckiestGuy-Regular.ttf")})
useEffect(() => {
    if (error)throw error;
    if(fontsLoaded) SplashScreen.hideAsync()
}, [fontsLoaded, error])
useEffect(() => {
    async function hideNavigationBar() {
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("overlay-swipe");
    }
    hideNavigationBar();
  }, []);

if (!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout
