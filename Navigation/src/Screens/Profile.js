import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../Styles/Global';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>PROFILE</Text>
      <TouchableOpacity
        style={globalStyles.botton}
        title="Go Back"
        onPress={() => navigation.goBack('Home')}
      >
        <Text> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
