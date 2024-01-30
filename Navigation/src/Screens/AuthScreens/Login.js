import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../../Styles/Global';
import Input from '../../Components/Input';
import Butto from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const {token, setToken}= useState('');

  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
    <Text style={globalStyles.title}>Login</Text>
    <Input label={'Email'} value={token} onChangeText={setToken}/>
    
    <Input label={'Password'} secureTextEntry/>
    <Butto title={"Sign In"}/>
    <Butto title={"Sign Up"} onPress={()=> navigation.navigate("SingUp")}/>
   
  </View>
  )
}

export default Login;

  