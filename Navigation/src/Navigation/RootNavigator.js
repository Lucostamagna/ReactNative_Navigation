import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

import AuthStack from './AuthStack';
import { useSelector } from 'react-redux'

export default function RootNavigator() {
  const  { userToken } = useSelector(state => state.auth); //el nombre de mi reducer es auth 
 
  return (
    <NavigationContainer>
      {userToken ? <MyStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
