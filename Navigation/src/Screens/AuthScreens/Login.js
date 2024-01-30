import React from 'react';
import { Text, View} from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../../Styles/Global';
import Input from '../../Components/Input';
import Butto from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/auth/auth';

const Login = () => {
  const [ token, setToken ] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();

  async function save(value) {
    try {
      await AsyncStorage.setItem('@token', value); //guardo el token
      dispatch(signIn(value));
      console.log('date save');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <Input label={'Email'} value={token} onChangeText={setToken} />

      <Input label={'Password'} secureTextEntry />
      <Butto title={'Sign In'} onPress={() => save(token)} />
      <Butto title={'Sign Up'} onPress={() => navigation.navigate('SingUp')} />
    </View>
  );
};

export default Login;
