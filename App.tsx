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
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    paddingHorizontal: 100,
    paddingVertical: 200,
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowScroll: {
    backgroundColor: 'white',
    marginTop: 150,
    // marginBottom:100,
    width: 400,
    height: 200,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  square: {
    backgroundColor: 'green',
    width: 200,
    height: 120,
    marginTop: 40,
    marginRight: 20,
    borderRadius: 25,
  },
  plus: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    borderRadius: 50,
  },
  item: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
