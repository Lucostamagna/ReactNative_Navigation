import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import { Colors } from '../Contants/Colors';

const Tab = createMaterialTopTabNavigator();

const MyTopTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle:{color:Colors.dark},
       tabBarIndicatorStyle:{backgroundColor:Colors.details},
        tabBarStyle:{backgroundColor:Colors.gray}
    }}>
        <Tab.Screen name='home' component={HomeScreen}/>
        <Tab.Screen name='profile' component={Profile}/>
    </Tab.Navigator>
  )
}

export default MyTopTab