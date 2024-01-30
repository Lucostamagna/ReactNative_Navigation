import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import { restoreToken } from '../features/auth/auth';
import { useEffect } from 'react';

export default function RootNavigator() {
  const { userToken } = useSelector(state => state.auth); //el nombre de mi reducer es auth
  const dispatch = useDispatch();

useEffect(()=>{
getValue();
},[])


  //guardo mi token 
  async function getValue() {
    try {
      const value = await AsyncStorage.setItem('@token');

      if (value !== null) {
        console.log('data restored', value);
        dispatch(restoreToken(value));
      } else {
        console.log('mp data');
        dispatch(restoreToken(null));
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <NavigationContainer>
      {userToken ? <MyStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
