import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen'
import Profile from '../Screens/Profile'
import { FontAwesome } from '@expo/vector-icons'; 
import { Colors } from '../Contants/Colors';




const Tab = createBottomTabNavigator();
const MyBottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.details,
        tabBarInactiveTintColor:Colors.gray
    }}
    >
        <Tab.Screen
         name='Home'
          component={HomeScreen}
          options={{
            
            tabBarIcon: ({color}) => <FontAwesome name="home" size={32} color={color} />
          }}/>
        <Tab.Screen 
        name='Profile'
         component={Profile}
         options={{
            tabBarBadge:2,
           tabBarBadgeStyle:{backgroundColor:Colors.details},
            tabBarIcon:({color})=> <FontAwesome name="user" size={32} color={color} />
         }}/>
        
    </Tab.Navigator>

  )
}

export default MyBottomTab