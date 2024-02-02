import React from 'react';
import { globalStyles } from '../Styles/Global';
import { View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../features/contacts/contacts';

const ContactRedux = () => {
  const contact = useSelector(state => state.contact);
  const dispatch = useDispatch();

  function handleLongOnPress(id) {
    dispatch(deleteContact(id));
  }
  console.log(contact);
  //tengo que acceder a mi estado de redux
  return (
    <View style={globalStyles.inputContainer}>
      <Text> Contact Redux</Text>
      {contact.map((i, index) => (
        <Pressable key={index} onPress={() => handleLongOnPress(i.id)}>
          <Text style={globalStyles.title}> {i.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ContactRedux;
