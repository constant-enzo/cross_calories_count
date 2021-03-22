import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//views
import StartScreen from "./app/views/StartScreen"
import CrossActivitySelectionScreen from "./app/views/CrossActivitySelectionScreen"
import CrossActivityInputScreen from "./app/views/CrossActivityInputScreen"
import { SafeAreaProvider } from 'react-native-safe-area-context';

//options={{headerShown: false}}
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start" >
          <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}} />
          <Stack.Screen name="CrossActivitySelection" component={CrossActivitySelectionScreen} options={{headerShown: false}}  />
          <Stack.Screen name="CrossActivityInput" component={CrossActivityInputScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
      
  );
}