import React from 'react';
import { Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'


const Profile = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>PROFILE</Text>
      <Button
      name='Go to Profile'
      onPress={()=> navigate.navigate('Profile')}/>
    </View>
  );
};

export default Profile;
