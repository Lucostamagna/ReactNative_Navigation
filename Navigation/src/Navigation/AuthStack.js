import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import Login from '../Screens/AuthScreens/Login';
import SingUp from '../Screens/AuthScreens/SingUp';


const Auth= createStackNavigator()
export default function AuthStack() {
  return (
    <Auth.Navigator
    screenOptions={{
        headerShown:false
    } }>
        <Auth.Screen name="Login" component={Login}/>
        <Auth.Screen name="Sing Up" component={SingUp}/>
    </Auth.Navigator>
  )
}

