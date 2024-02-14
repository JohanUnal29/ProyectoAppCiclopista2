import { useState } from "react";
import {
  SafeAreaView, StatusBar
} from "react-native";

import { fonts } from "./src/global/Fonts.js";

import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.jsx";
import { store } from './src/app/Store.jsx'
import { Provider } from 'react-redux'
import MainNavigator from "./src/navigation/MainNavigator.jsx";

import { init } from "./src/database/Index.js";

init()
.then(() => console.log("DB Initialized"))
.catch(err => console.log(err))

export default function App() {

  const [fontLoaded] = useFonts(fonts)
  if (!fontLoaded) return null

  return (
    <>
      <StatusBar
        backgroundColor={colors.red}
      />
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}


