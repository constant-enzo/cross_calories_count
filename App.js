import React from 'react';
import Start from "./app/views/Start"
import { SafeAreaView } from "react-native";
import GlobalStyles from './GlobalStyles';
export default function App() {
  return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <Start/>
      </SafeAreaView>
  );
}