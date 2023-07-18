import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import {useNavigation} from '@react-navigation/native';



const DetailScreen = () => {
  const changeColorPress = () => {
    // Burada save işlemi gerçekleştirilecek
    console.log('Save button pressed!');
  }
  const littleSquareBackgroundColor = styles.littleSquare.backgroundColor;
  
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text> Do You Want To Day</Text>
        <TextInput placeholder="list name"></TextInput>
        <View style={styles.menuSquare}>
        <TouchableOpacity style={[styles.littleSquare, { backgroundColor: 'red' }]} onPress={changeColorPress} />
          <TouchableOpacity style={styles.littleSquare} />
          <View style={styles.littleSquare} />
          <View style={styles.littleSquare} />
          <View style={styles.littleSquare} />
          <View style={styles.littleSquare} />
        </View>
        <TouchableOpacity
          style={[styles.saveButton, { backgroundColor: littleSquareBackgroundColor }]} >
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

    flex: 1,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //  backgroundColor:'pink'
  },

  menuSquare: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  littleSquare: {
    backgroundColor: 'pink',
    width: 30,
    height: 30,
    marginRight: 20,
    borderRadius: 5,
  },
  saveButton: {
    // backgroundColor:'yellow',
    width: 285,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: 15,
  },

  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveText: {},
});

/*
<Button title="+" onPress={() => navigation.navigate('DetailScreen')} />
<Text onPress={() => navigation.navigate('DetailScreen')} >+</Text>
*/
