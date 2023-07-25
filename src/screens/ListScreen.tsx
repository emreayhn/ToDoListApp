import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const [task, setTask] = useState<string>("");
  
  

 const TaskView = () => {
  return (
    <View style={styles.task}>
      <TouchableOpacity style={styles.square}></TouchableOpacity>
      <Text style={styles.taskText}>{task}</Text>
    </View>
  );
};

let initTodoList = [
 
]
const [todoList, setTodoList] = useState<string[]>([]);


  const taskData = async (task: string) => {
    try {
      await AsyncStorage.setItem('my-key', task);
    } catch (e) {}
    console.log(task);
  };



  const addTodo = () => {
    if (task) {
      setTodoList(prevList => [...prevList, task]);
      setTask(""); // Ekledikten sonra inputu temizleme
    }
  };
  
 
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.text}>What Will I Do</Text>
        <Text></Text>
        <View style={styles.line}></View>
        
        {todoList.map((task) =>
          <View style={styles.task}>
          <TouchableOpacity style={styles.square}
          ></TouchableOpacity>
          <Text style={styles.taskText}>{task}
          </Text>
        </View>)}
        
       
      </View>

      <KeyboardAvoidingView
        style={styles.keybord}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.textInput}
          placeholder={'write a task'}
          value={task}
          onChangeText={setTask}></TextInput>
        <TouchableOpacity
          style={styles.plus}
          onPress={() => {
            taskData(task);
          addTodo()
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    // justifyContent:'space-between'
  },
  div: {
    //    backgroundColor:'cyan',
    width: '100%',
    height: '40%',
  },
  task: {
 //   backgroundColor: 'cyan',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    paddingLeft: '10%',
    alignItems:'center'
  },
  square: {
    width: '5%',
    height: '28%',
    //backgroundColor: 'yellow',
    borderRadius: 5,
    borderWidth:1,
    borderColor:'black',
  },
  taskText: {
    marginLeft:10

  },
  text: {
    fontSize: 30,
    marginLeft: 80,
  },
  line: {
    backgroundColor: 'purple',
    width: '100%',
    height: '0.7%',
    marginTop: 20,
    marginLeft: 80,
  },
  keybord: {
    //    backgroundColor:'pink',

    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginTop: 240,
  },
  textInput: {
    backgroundColor: 'white',
    width: '82%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
  },
  plus: {
    backgroundColor: 'pink',
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default ListScreen;
