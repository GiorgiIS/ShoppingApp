import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store/root';
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Fonts } from './constants/Fonts';

const fetFonts = () => {
  return Font.loadAsync(Fonts);
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetFonts}
      onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
