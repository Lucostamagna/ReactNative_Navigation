import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../Styles/Global';
import Input from '../../Components/Input';
import Butto from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
    <Text style={globalStyles.title}>Sing Up</Text>
    <Input label={'Email'}/>
    <Input label={'Password'} secureTextEntry/>
    <Butto title={"Sign Up"}/>
    <Butto title={"Sign Up"} onPress={()=> navigation.navigate("SigUp")}/>
   
  </View>
  )
}

export default Login;

  