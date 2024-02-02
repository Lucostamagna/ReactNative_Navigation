import * as React from 'react'

import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/Global';
import { signOut } from '../features/auth/auth';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddContact from '../Components/AddContact';
import ContactList from '../Components/ContactList';

const Profile = () => {
  const [contacts, setContacts]= React.useState(initialContacts)

  function handleAddContact(name){
    setContacts([...contacts, {id: nexId++, name}])
  }
function handleDeleteContact(id){
  setContacts( contacts.filter(contact => contact.id !== id))
}

function hanldeChangeContact(contact){
  setContacts(contacts.map( c=> (c.id === contact.id ? contact : c)))
}


  return (
    <View style={globalStyles.inputContainer}>
      <AddContact onAddContact={handleAddContact}/>
      <ContactList contacts={contacts}
      onChangeContact={hanldeChangeContact}
      onDeleteContact={handleDeleteContact}/>
      
    </View>
  );

  };

  let nexId = 3
  const initialContacts=[
    {id:0, name:'Lucia Costamagna'},
    {id:1, name:'Mica Boriglio'},
    {id:2, name: 'Cielo Lee'}
  ]




  // return (
  //   <View style={globalStyles.screenContainer}>
  //     <Text style={globalStyles.title}>PROFILE</Text>
  //     <Button
  //       title="sign out"onPress={async () => {
  //         await AsyncStorage.removeItem('@token');
  //         dispatch(signOut());
  //       }}
  //     />
  //   </View>
  // );


export default Profile;
