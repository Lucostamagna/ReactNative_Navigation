import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen'
import Profile from '../Screens/Profile'
import Setting from '../Screens/Setting'



const Tab = createBottomTabNavigator();
const MyBottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Profile' component={Profile}/>
        <Tab.Screen name='Setting' component={Setting}/>
    </Tab.Navigator>

  )
}

export default MyBottomTab