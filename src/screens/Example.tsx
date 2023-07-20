import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../App';

function Example() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [userName, setuserName] = useState<string>('');
  const storeData = async (userName: string) => {
    try {
      await AsyncStorage.setItem('my-key', userName);
    } catch (e) {
      
    }
    console.log(userName)
  };
  const [password, setPassword] = useState<string>("")
  const storeDataPassword = async (password: string) => {
    try {
      await AsyncStorage.setItem('my-key2', password);
    } catch (e) {
      
    }
    console.log(password)
  };

  return (
    <View style={styles.layout}>
      <KeyboardAvoidingView style={styles.container}>
        <Text>USERNAME</Text>
        <TouchableOpacity style={styles.textInput}>
          <TextInput
            value={userName}
            onChangeText={e => {
              setuserName(e);
            }}
            placeholder="Please Enter Name"></TextInput>
        </TouchableOpacity>
        <Text>PASSWORD</Text>
        <TouchableOpacity style={styles.textInput}>
          <TextInput 
          value={password}
          onChangeText={e=>{
            setPassword(e)
          }}
          placeholder="Please Enter Password"></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        
        onPress={()=>{
            storeData(userName);
            storeDataPassword(password)
            navigation.navigate('aktivity',{userName})
        }}>
            
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

export default Example;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    paddingLeft: '9%',
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 8,
    paddingHorizontal: 7,
  },
  button: {
    alignItems: 'center',
    marginTop: '5%',
  },
  buttonText: {
    fontSize: 20,
    color: 'green',
  },
});
