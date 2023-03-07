import { View, Pressable, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import LoginScreenStyles from './LoginScreenStyles'
import Title from '../../Customs/Title'
import InputWithIcon from '../../Customs/InputIcon'
import Buttons from '../../Customs/Buttons'
import {FontAwesome5 } from '@expo/vector-icons';

export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Title titleText='Login'/>
      <View style={LoginScreenStyles.signIncontainer}> 
      <View style={LoginScreenStyles.signInForm}> 
     <InputWithIcon icon='email' placeholder='Email address' value={email} onChangeText={setEmail}
      />
      <InputWithIcon 
      icon='lock' 
      placeholder='Password' 
      value={password} 
      secureTextEntry={!showPassword}
      onChangeText={setPassword}
      rightIcon={
        <TouchableOpacity onPress={toggleShowPassword}> 
          <FontAwesome5 name={showPassword ? 'eye' : 'eye-slash'}  size={18} color="gray" />
        </TouchableOpacity>
      }
      />
      </View>
    <View style={{marginTop:20}} > 
      <Pressable onPress={() => navigation.navigate('Home')}> 
            {(state) => <Buttons pressed={state.pressed} buttonText="Login"/>}
      </Pressable>
          </View>

    </View>
    </View>
  )
}