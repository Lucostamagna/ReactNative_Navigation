import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Input from './Input';
import { Colors } from '../Contants/Colors';
const AddContact = ({onAddContact}) => {
  const [name, setName] = React.useState('');

  function handleAdd(){
    setName('');
    onAddContact(name)
  }
  return (
    <View style={style.container}>
      <View style={{ width: '80%' }}>
        <Input label={'add contact'} value={name} onChangeText={setName} />
      </View>
      <Button title="add" color={Colors.details} onPress={handleAdd} />
    </View>
  );
};

export default AddContact;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '5%',
  },
});
