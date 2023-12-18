import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Setting from '../Screens/Setting';
import Profile from '../Screens/Profile';
import { Colors } from '../Contants/Colors';
import { Text, View } from 'react-native';

const HomeStack = createStackNavigator();

function CustomHeader({ title }) {
  return (
    <View
      style={{
        height: 90,
        width: '100%',
        backgroundColor: Colors.details,
        padding: 30,
        justifiContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 25,
          color: 'black',
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const myConfig = {
  headerShown: true,
  title: 'something',
  headerTitleAlign: 'center',
  presentation: 'card',
  gestureEnabled: false,
  header: ({ navigation, route, options, back }) => (
    <CustomHeader title={route.name} />
  ),
};
export default function MyStack() {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Setting" component={Setting} />
    </HomeStack.Navigator>
  );
}
