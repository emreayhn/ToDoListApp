import React from 'react';
import { ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,} from 'react-native';
  import { useNavigation } from "@react-navigation/native";

  

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    
   <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.text}> ACTİVİTİES</Text>
        <Text> hujh</Text>
      </View>

      <View style={styles.rowScroll}>
        <ScrollView horizontal>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
          <View style={styles.square}></View>
        </ScrollView>
      </View>
      <TouchableOpacity>
        <KeyboardAvoidingView
          style={styles.plus}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
             <Button title="+" onPress={() => navigation.navigate('DetailScreen')} />
        </KeyboardAvoidingView>
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
    backgroundColor: 'pink',
    flex: 1,
    paddingHorizontal: 100,
    paddingVertical: 120,
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

