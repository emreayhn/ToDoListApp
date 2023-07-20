import { StyleSheet, Text, View, KeyboardAvoidingView , TextInput, Platform, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native';

const ListScreen = () => {
    const [ task , setTask] = useState("")
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <Text style={styles.text}>What Will I Do</Text>
            <Text></Text>
            <View style={styles.line}></View>
        </View>
        
        <KeyboardAvoidingView style={styles.keybord}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TextInput style={styles.textInput}
          placeholder={'write a task'} 
          value={task}
          onChangeText={setTask}>

            </TextInput>
            <TouchableOpacity style={styles.plus} >
          <Text >+</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f8f8ff',
       // justifyContent:'space-between'
        
       
    },
    div: {
     //    backgroundColor:'cyan',
        width:'100%',
        height:'40%',
        
        
        
    },
    text: {
        fontSize:30,
        marginLeft:80,
    },
    line:{
        backgroundColor:'purple',
        width:'100%',
        height:'0.7%',
        marginTop:20,
        marginLeft:80
    },
    keybord:{
    //    backgroundColor:'pink',
      
        width:'100%',
        height:'40%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between', 
        paddingLeft:'10%',
        paddingRight:'10%',
        marginTop: 240

        
    },
    textInput: {
        backgroundColor:'white',
        width:'82%',
        height:50,
        borderRadius:10,
        paddingLeft:20,
    },
    plus: {
        backgroundColor:'pink',
        width:'15%',
        height:50,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:10
    }


})