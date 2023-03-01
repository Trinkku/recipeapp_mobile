import { View, Text, TextInput } from 'react-native'
import React from 'react'
import LoginScreenStyles from './LoginScreenStyles'
import Title from '../../Customs/Title'

export default function Login() {
  return (
    <View style={LoginScreenStyles.container}>
      <Title/>
      <TextInput style={LoginScreenStyles.loginContainer}
      placeholder ="enter email adress"
      keyboardType='email-address'
      value=''

      
      />
    </View>
  )
}