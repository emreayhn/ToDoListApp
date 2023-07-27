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
  Animated,
  PanResponder,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = () => {
  const [listName, setlistName] = useState<string | null>();
  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<string[]>([]);
/*
  const [objec, setObjec] = useState<any>([
    {
      id: 0,
      brand: 'fiat',
      model: 2012,
      adres: {
        province: 'denizli',
        neighborhood: 'selçuk',
      },
    },
    {
      id: 1,
      brand: 'fiat',
      model: 2012,
      adres: {
        province: 'denizli',
        neighborhood: 'selçuk',
      },
    },
    {
      id: 2,
      brand: 'fiat',
      model: 2012,
      adres: {
        province: 'denizli',
        neighborhood: 'selçuk',
      },
    },
    {
      id: 3,
      brand: 'fiat',
      model: 2012,
      adres: {
        province: 'denizli',
        neighborhood: 'selçuk',
      },
    },
  ]);
  setObjec([
    ...objec,
    objec[objec.findIndex((v: any) => v.id === 2)],
    {
      id: 3,
      brand: 'fiat',
      model: 2012,
      adres: {
        province: 'denizli',
        neighborhood: 'selçuk',
      },
    },
  ]);
*/
  useEffect(() => {
    visibleData();
    getData();
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

  const addTodo = async () => {
    await taskData(task);
    setTodoList(taskList => [...taskList, task]);
    setTask('');
  };

  const taskData = async (task: string) => {
    try {
      await AsyncStorage.setItem('@task', JSON.stringify([...todoList, task]));
    } catch (e) {}
    console.log(task);
  };

  const removeTask = async (index: number) => {
    setTodoList(prevList => {
      const newList = [...prevList];
      const removedTask = newList.splice(index, 1)[0];
      AsyncStorage.setItem('@task', JSON.stringify(newList)).catch(error => {
        console.error('Hata oluştu:', error);
      });
      return newList;
    });
  };

  const getData = async () => {
    try {
      const saveTaskName = await AsyncStorage.getItem('@task');
      if (saveTaskName !== null) {
        setTodoList(JSON.parse(saveTaskName));
      } else {
        setTodoList([]);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.text}>What Will I Do</Text>
        <Text style={styles.listNameText}>{listName}</Text>
        <View style={styles.line}></View>
        {todoList.map((task, index) => (
          <View key={index} style={styles.task}>
            <TouchableOpacity
              style={styles.square}
              onPress={() => removeTask(index)}></TouchableOpacity>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
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
            addTodo();
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
    //borderTopWidth:10
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
    alignItems: 'center',
  },
  square: {
    width: '5%',
    height: '28%',
    //backgroundColor: 'yellow',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '191970',
  },
  taskText: {
    marginLeft: 10,
    color:'black'
  },
  text: {
    fontSize: 30,
    marginLeft: 80,
    color: 'gray',
  },
  listNameText: {
    marginLeft: 80,
    fontSize: 20,
    color: 'black',
  },
  line: {
    backgroundColor: 'purple',
    width: '100%',
    height: '0.7%',
    marginTop: 20,
    marginLeft: 80,
  },
  keybord: {
    //   backgroundColor:'pink',

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
