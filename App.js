import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, I18nManager, Platform } from 'react-native';
import HomeScreen from '@Screens/Home/HomeScreen';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
export default function App() {

  I18nManager.allowRTL(false);
  const isRTLAndroid = Platform.OS === "android" && I18nManager.isRTL; //work on android only
  if (isRTLAndroid) {
    I18nManager.forceRTL(false);
    I18nManager.allowRTL(false);
    Expo.Updates.reload();
  }

  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'ArbFONTS-Montserrat-Arabic-Black': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Black.ttf'),
      'ArbFONTS-Montserrat-Arabic-Bold': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Bold.ttf'),
      'ArbFONTS-Montserrat-Arabic-ExtraBold': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-ExtraBold.ttf'),
      'ArbFONTS-Montserrat-Arabic-ExtraLight': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-ExtraLight.ttf'),
      'ArbFONTS-Montserrat-Arabic-Light': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Light.ttf'),
      'ArbFONTS-Montserrat-Arabic-Medium': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Medium.ttf'),
      'ArbFONTS-Montserrat-Arabic-Regular': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Regular.ttf'),
      'ArbFONTS-Montserrat-Arabic-SemiBold': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-SemiBold.ttf'),
      'ArbFONTS-Montserrat-Arabic-Thin': require('./assets/fonts/ArbFONTS-Montserrat-Arabic-Thin.ttf'),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
