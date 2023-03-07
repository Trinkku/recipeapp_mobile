import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from '../Screens/FrontScreen/FrontScreen';
import Login from '../Screens/Login/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';


export default function LoginNavigator() {
// LoginNavigator is a stack navigator used to navigate between the applications first screen, login and signup screens.
// LoginNavigator is the first component to be rendered by App.js when the app is first launched.

  const Stack = createStackNavigator()


  return (
   <Stack.Navigator>
        <Stack.Screen name= 'Front' component={FrontScreen} options={{headerShown: false}}/>
        <Stack.Screen name = 'SignUp' component={SignUpScreen}/>
        <Stack.Screen name = 'Login' component={Login}/>
        
   </Stack.Navigator>

  )
}