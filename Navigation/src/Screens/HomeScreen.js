import * as React from 'react';
import { globalStyles } from '../Styles/Global';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
//chequeo si es la primera vez que el user ingresa
 React.useEffect(()=>{
  checkFirstLaunch();
 },[]);
 async function checkFirstLaunch(){
  const firstLaunch= await AsyncStorage.getItem('@firstLaunch');
  if(firstLaunch){
    return;
  }else{
    await AsyncStorage.setItem('@firstLaunch', 'true');
    navigation.navigate('OnBoarding');
  }
 }



  
  return (
    <View style={globalStyles.screenContainer}>
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
