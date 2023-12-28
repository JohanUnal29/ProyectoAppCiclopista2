import { useState } from "react";
import {
  SafeAreaView, StatusBar
} from "react-native";

import { fonts } from "./src/global/Fonts.js";

import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.jsx";
import TabNavigator from "./src/navigation/TabNavigator.jsx";
import { store } from './src/app/Store.jsx'
import { Provider } from 'react-redux'

export default function App() {

  const [fontLoaded] = useFonts(fonts)
  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={colors.red}
      />
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </>
  );
}


