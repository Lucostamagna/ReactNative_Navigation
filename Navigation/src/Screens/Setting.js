import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../Styles/Global';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Setting</Text>
      <TouchableOpacity
        style={globalStyles.botton}
        onPress={() => navigation.goBack('Home')}
      >
        <Text> Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
