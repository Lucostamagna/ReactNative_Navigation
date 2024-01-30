import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

import AuthStack from './AuthStack';
import { useSelector } from 'react-redux'

export default function RootNavigator() {
  const user = useSelector(state => state.auth); //el nombre de mi reducer es auth 
  return (
    <NavigationContainer>
      {user ? <MyStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
