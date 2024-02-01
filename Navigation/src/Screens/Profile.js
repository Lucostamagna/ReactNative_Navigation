import React from 'react';

import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/Global';
import { signOut } from '../features/auth/auth';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddContact from '../Components/AddContact';

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.inputContainer}>
      <AddContact/>
      
    </View>
  );






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
};

export default Profile;
