import { StyleSheet, Text, View, KeyboardAvoidingView , TextInput} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <Text style={styles.text}>Todo</Text>
            <Text></Text>
            <View style={styles.line}></View>
        </View>
        
        <KeyboardAvoidingView style={styles.keybord}>
            <TextInput>

            </TextInput>
        </KeyboardAvoidingView>
      
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f8f8ff',
        justifyContent:'space-between'
        
    },
    div: {
         backgroundColor:'cyan',
        width:'100%',
        height:'40%',
        
        
        
    },
    text: {
        fontSize:45,
        marginLeft:80
    },
    line:{
        backgroundColor:'purple',
        width:'100%',
        height:'0.7%',
        marginTop:20,
        marginLeft:80
    },
    keybord:{
        backgroundColor:'pink',
        width:'100%',
        height:'40%',
        
    },
    textInput: {

    }


})