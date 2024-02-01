import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Input';
const AddContact = () => {
  const [name, setName] = React.useState('');

  return (
    <View>
      <Input />
    </View>
  );
};

export default AddContact;

const style = StyleSheet.create({});
