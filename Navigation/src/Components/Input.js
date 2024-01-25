import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { globalStyles } from '../Styles/Global';
import { Colors } from '../Contants/Colors';

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.details,
  },
});

export default Input;
