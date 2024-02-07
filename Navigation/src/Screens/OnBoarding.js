import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Contants/Colors';
import { StyleSheet } from 'react-native';
import Butto from '../Components/Button';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = () => {
  const navigation = useNavigation();

  function hanlePress() {
    registerForPushNotificationsAsync()
      .then(async token => {
        await AsyncStorage.setItem('@pushtoken', token);
        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        console.log('error');
        navigation.navigate('HomeScreen');
      });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('fail to get token');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      //guardo mi token si acepta notificaciones
      console.log('this is the token', token);
    } else {
      return;
    }
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
      return token;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to My App!</Text>
      <View style={styles.featureContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/arrows.png')}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}> Manage Daily Tasks</Text>
          <Text style={styles.subHeadline}>
            {' '}
            My App is a simple app that helps you to increase your productivity
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image style={styles.icon} source={require('../../assets/bell.png')} />
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}> Notification</Text>
          <Text style={styles.subHeadline}>
            {' '}
            Please allow us to notifiy you when it's time to do you task
          </Text>
        </View>
      </View>
      <View style={styles.featureContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/design.png')}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.subtitle}>Minimal Design</Text>
          <Text style={styles.subHeadline}>
            {' '}
            Enjoy a simple design that allows you to focus only on what you have
            to do
          </Text>
        </View>
      </View>
      <Butto title={'Continue'} onPress={hanlePress} />
    </View>
  );
};
7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 150,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 100,
    color: Colors.dark,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 22,
    color: Colors.secondaryColor,
  },
  subHeadline: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
    color: Colors.secondaryColor,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 20,
    resizeMode: 'contain',
  },
});

export default OnBoarding;
