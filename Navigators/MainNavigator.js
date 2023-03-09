import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import { COLORS } from '../Customs/Colors'



export default function MainNavigator({navigation}) {

    const Stack = createStackNavigator()

  return (
    <Stack.Screen
    name="Home"
    component={Home}
    options={{
        headerTitle:'Koti',
        headerStyle:{backgroundColor: COLORS.beige}
    }}
    />


  )
}