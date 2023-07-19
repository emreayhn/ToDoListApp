import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from "./src/screens/ListScreen";

export type StackParams = {
  DetailScreen: any;
  aktivity: any;
  ListScreen : any;
};

const Stack = createNativeStackNavigator<StackParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="aktivity" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
