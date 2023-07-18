import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import {useNavigation} from '@react-navigation/native';
import CustomStyles from "./src/compenents/CustomStyles";



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen  name="aktivity" component={HomeScreen} />
        <Stack.Screen  name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
       
  );
}

export default App;
