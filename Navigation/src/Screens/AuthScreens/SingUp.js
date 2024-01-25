import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../Styles/Global';
import Input from '../../Components/Input';
import Butto from '../../Components/Button';

const SingUp = () => {
  return (
    <View style={globalStyles.screenContainer}>
    <Text style={globalStyles.title}>Sing Up</Text>
    <Input label={'Email'}/>
    <Butto title={"Sign Up"}/>
   
  </View>
  )
}

export default SingUp

  