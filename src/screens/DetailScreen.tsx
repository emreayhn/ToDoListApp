import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';



const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text> Do You Want To Day</Text>
        <TextInput placeholder='list name'></TextInput>
        <View style={styles.menuSquare} >
          <View style={styles.littleSquare}/>
          <View style={styles.littleSquare}/>
          <View style={styles.littleSquare}/>
          <View style={styles.littleSquare}/>
          <View style={styles.littleSquare}/>
          <View style={styles.littleSquare}/>
        </View>
        <TouchableOpacity>
          <Text>save</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
};



export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
    
    flex:1 
  },
  menu: {
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
  //  backgroundColor:'pink'
  },

  menuSquare:{
    flexDirection:'row', 
    marginBottom:20

  },

  littleSquare:{
    backgroundColor:'black',
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 5
  
  },
  saveButton:{
    backgroundColor:'?',
  },

  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



/*
<Button title="+" onPress={() => navigation.navigate('DetailScreen')} />
<Text onPress={() => navigation.navigate('DetailScreen')} >+</Text>
*/