import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Button, Text, View } from 'react-native'

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>text</Text>
      <Button 
      title='Go Back'
      onPress={()=> navigation.goBack('Home')}
      />
    </View>
  )
}

export default Setting