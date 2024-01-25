import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../Contants/Colors';

const Butto = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.details,
    borderColor: Colors.details,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginBottom: '1%',
    alignItems:'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  textButton: {
    fontSize: 15,
    color:'white'
  },
});
export default Butto;
