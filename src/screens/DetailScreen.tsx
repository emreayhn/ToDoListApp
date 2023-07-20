import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ColorView from '../compenents/ColorView';
import {JumpingTransition} from 'react-native-reanimated';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../App';
import HomeScreen from './HomeScreen';

const DetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [selectedColor, setSelectedColor] = useState('orange');
  const [name, setName] = useState<string | number>('');
  const list = [
    {
      color: '#6495ed',
    },
    {
      color: '#ffebcd',
    },
    {
      color: '#deb887',
    },
    {
      color: '#008b8b',
    },
    {
      color: '#ff1493',
    },
    {
      color: '#b22222',
    },
  ];

  /* const changeColorPress = (props: any) => {
    console.log('Save button pressed!');
  };
  */
  const littleSquareBackgroundColor = styles.littleSquare.backgroundColor;

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text> Do You Want To Day</Text>
        <TextInput
          placeholder="list name"
          value={name.toString()}
          onChangeText={e => {
            setName(Number(e));
          }}></TextInput>
        <View style={styles.menuSquare}>
          {list.map((v, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.littleSquare, {backgroundColor: v.color}]}
              onPress={() => {
                setSelectedColor(v.color);
                
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.saveButton, {backgroundColor: selectedColor}]}
          onPress={() => navigation.navigate('aktivity', {name: name})}>
          <Text>save</Text>
        </TouchableOpacity >
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8ff',

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
