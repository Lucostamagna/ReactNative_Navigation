import React from 'react'
import { globalStyles } from '../Styles/Global'
import { Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.title}>HOME</Text> 
        <Button 
        title= 'go to Setting'
        onPress={()=> navigation.navigate('Setting')}/>
         <Button 
        title= 'go to Profile'
        onPress={()=> navigation.navigate('Profile')}/>
    </View>
  )
}

export default HomeScreen