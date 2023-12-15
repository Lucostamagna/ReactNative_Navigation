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
    </View>
  )
}

export default HomeScreen