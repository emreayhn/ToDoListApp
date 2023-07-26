import React, {useState, useEffect} from 'react';
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
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../../App';
import CustomStyles from '../compenents/CustomStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  //const route = useRoute();
  // const route: any = useRoute();
  const [listName, setlistName] = useState<string | null>();
  const [listArry, setListArray] = useState<string[]>([]);
  const [list, setList] = useState<any>()

  useEffect(() => {
    visibleData();
  }, []);

  const visibleData = async () => {
    try {
      const saveListName = await AsyncStorage.getItem('@name');
      if (saveListName !== null) {
        setlistName(JSON.parse(saveListName));
      } else {
        setlistName(null);
      }
    } catch (error) {}
  };

  const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Veri başarıyla silindi.');
      visibleData();
    } catch (error) {
      console.log('Veri silinirken hata oluştu:', error);
    }
  };
  const addTodo = async () => {
    await visibleData();
    setListArray(taskList => [...taskList, list]);
    
  };

  const removeAktivity =  (index: number) => {
    setListArray(prevList => {
      const newList = [...prevList];
      const removedTask = newList.splice(index, 1)[0];
      return newList;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.text}> ACTİVİTİES</Text>
        <Text></Text>
      </View>

      <View style={styles.rowScroll}>
        <ScrollView horizontal>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ListScreen')}
            onLongPress={() =>
              Alert.alert('Warning', 'Which One Do You Want to Delete', [
                {text: 'DELETE DATA', onPress: () => removeData('@name')},
                {text: 'DELETE AKTİVİTY'}, 
                {text: 'EXIT'},
              ])
            }>
            <Text style={styles.squareText}>{listName} </Text>
          </TouchableOpacity >
          {listArry.map((list, index) =>(
            <TouchableOpacity
            style={styles.square}
            onPress={() => addTodo()}
            onLongPress={()=>Alert.alert("s","ad",[
              {text:'delete', onPress:()=> removeAktivity(index)}
            ])}>
              
            <Text> </Text>
          </TouchableOpacity>

          ))}
          
          
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={async () =>{
          navigation.navigate('DetailScreen', {visibleData: visibleData});
          addTodo();
        }}
      >
        <Text style={styles.plus}>+</Text>
        <KeyboardAvoidingView
          style={styles.plus}
          behavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }></KeyboardAvoidingView>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#f8f8ff',
    flex: 1,
    paddingHorizontal: 100,
    paddingVertical: 120,
    alignItems: 'center',
  },
  background: {
  //  backgroundColor: 'white',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowScroll: {
 //   backgroundColor: 'white',
    marginTop: 150,
    // marginBottom:100,
    width: 400,
    height: 200,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  square: {
    backgroundColor: '#ffd700',
    width: 200,
    height: 120,
    marginTop: 40,
    marginRight: 20,
    borderRadius: 25,
    alignItems:'center',
    paddingVertical:'1.5%',
  },
  squareText:{
    fontSize:20,
    fontFamily: 'serif',
    color:'black'
  },
  plus: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    borderRadius: 50,
    paddingLeft: 17,
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 30,
    color:'black'
  },
  item: {
    fontWeight: 'bold',
    fontSize: 15,
    
  },
});
