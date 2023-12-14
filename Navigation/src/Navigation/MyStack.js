import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Setting from '../Screens/Setting';
import Profile from '../Screens/Profile';

const HomeStack = createStackNavigator();

export default function MyStack() {
  return (
  <HomeStack.Navigator>
 <HomeStack.Screen name='Home' component={HomeScreen}/>
 <HomeStack.Screen name='Profile' component={Profile}/>

  </HomeStack.Navigator>
  )
}
