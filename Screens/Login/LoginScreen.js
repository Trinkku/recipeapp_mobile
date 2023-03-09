import { View, Pressable, TouchableOpacity} from 'react-native'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/Authcontext'
import LoginScreenStyles from './LoginScreenStyles'
import Title from '../../Customs/Title'
import InputWithIcon from '../../Customs/InputIcon'
import Buttons from '../../Customs/Buttons'
import {FontAwesome5 } from '@expo/vector-icons';



export default function Login({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { setIsLogged } = useContext(AuthContext)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const SignIn = async() => { 
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setIsLogged(true)
      console.log("Welcome")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

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
      <Pressable onPress={SignIn}> 
            {(state) => <Buttons pressed={state.pressed} buttonText="Login"/>}
      </Pressable>
          </View>
    </View>
    </View>
  )
}