import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';

interface ColorProps {
  backgroundColor: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const ColorView: React.FC<ColorProps> = (props) => {
  const { backgroundColor, children , onPress} = props;

  const styles = StyleSheet.create({
    saveButton: {
        backgroundColor: backgroundColor,
        width: 285,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderRadius: 15,
      },

  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.saveButton}>
      <View>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default ColorView;
