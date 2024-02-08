import * as React from 'react';
import { globalStyles } from '../Styles/Global';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import Butto from '../Components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {
  const [date, setDate] = React.useState(new Date());
  const navigation = useNavigation();
  //chequeo si es la primera vez que el user ingresa
  React.useEffect(() => {
    checkFirstLaunch();
  }, []);

  async function handleNotification() {
    const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000;
    try {
      const id = await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Notification',
          body: 'This is a test Notification',  
              },
        trigger,
      });
      alert(`Notification schedualed!, ${id}`);
    } catch (erro) {
      Alert(
        'The notification failed to scheduleNotificationAsync, make sure the hour is valid'
      );
    }
  }

  async function checkFirstLaunch() {
    const firstLaunch = await AsyncStorage.getItem('@firstLaunch');
    if (firstLaunch) {
      return;
    } else {
      await AsyncStorage.setItem('@firstLaunch', 'true');
      navigation.navigate('OnBoarding');
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      {/* <DateTimePicker
        value={date}
        style={{ width: '25%' }}
        mode={'time'}
        onChange={(event, selectedDate) => setDate(selectedDate)}
      /> */}
      <Butto title="Schedule Notification" onPress={handleNotification} />
      <Text style={globalStyles.title}>HOME</Text>
      {/* <TouchableOpacity
        style={globalStyles.botton}
        onPress={() => navigation.navigate('Setting')}
      >
        <Text> Go to Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.botton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text> Go to Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default HomeScreen;
