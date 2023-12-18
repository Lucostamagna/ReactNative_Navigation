import React from 'react';
import { globalStyles } from '../Styles/Global';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>HOME</Text>
      <TouchableOpacity
        style={globalStyles.botton}
        onPress={() => navigation.navigate('Setting')}
      >
        <Text> Go to Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.botton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text> Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
