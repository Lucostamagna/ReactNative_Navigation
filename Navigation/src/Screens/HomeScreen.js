import React from 'react'
import { globalStyles } from '../Styles/Global'
import { Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={globalStyles.screenContainer}>
        <Text style={globalStyles.title}>HOME</Text> 
    </View>
  )
}

export default HomeScreen