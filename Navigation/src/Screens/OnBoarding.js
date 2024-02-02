import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Contants/Colors';
import { StyleSheet } from 'react-native';
import Butto from '../Components/Button';

const OnBoarding = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to My App!</Text>
      <View style={styles.featureContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/arrows.png')}
        />
       <View style={{flex:1}} >
        <Text style={styles.subtitle}> Manage Daily Tasks</Text>
       <Text style={styles.subHeadline}>
          {' '}
          My App is a simple app that helps you to increase your productivity
        </Text>
       </View>
      </View>
      <View style={styles.featureContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/bell.png')}
        />
       <View style={{flex:1}} >
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
       <View style={{flex:1}} >
        <Text style={styles.subtitle}>Minimal Design</Text>
       <Text style={styles.subHeadline}>
          {' '}
          Enjoy a simple design that allows you to focus only on what you have to do
        </Text>
       </View>
      </View>
      <Butto title={'Continue'}/>
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
