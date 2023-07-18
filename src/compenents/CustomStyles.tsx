import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface iprops {
  children: React.ReactNode;
}
const CustomStyles = (props: iprops) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'yellow',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
},
text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomStyles;
