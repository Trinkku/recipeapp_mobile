import { getAuth, createUserWithEmailAndPassword, setDoc, firestore, doc} from '@firebase/auth';
import { View, Text, ScrollView, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../Customs/Title'
import SignUpStyles from './SignUpStyles'
import Button from '../../Customs/Button';


export default function SignUpScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')


    const createAccount = () => {
    if (password === confirmPassword){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User created with UID: ", user.uid);
        saveUser(user.uid)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      })
    } else {
        alert('Passwords do not match')
      }
    }
    
     const saveUser = async (userId) =>{
        console.log("Saving user with UID: ", userId);
        await setDoc(doc(firestore,"user", "testi"), {
            firstname:firstname,
            lastname:lastname,
            username:username,
            email:email
        }).catch(err => console.log(err))
    }
 
    
  return (
   <SafeAreaView style={SignUpStyles.container}>
    <Title/>
    <ScrollView contentContainerStyle={SignUpStyles.signUpContainer} bounces={false}>
        <TextInput style={SignUpStyles.inputField}
        placeholder='Username'
        value={username}
        onChangeText={text => setUsername(text)}
        />
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
            <View style={{flexDirection:'row', maxWidth:338, marginLeft:6,}}>
                <TextInput style={SignUpStyles.inputField1} 
                placeholder='First Name' 
                value={firstname} 
                onChangeText={text => setFirstName(text)} 
                />
                <TextInput style={SignUpStyles.inputField1} 
                placeholder='Last Name' 
                value={lastname} 
                onChangeText={text => setLastName(text)} 
                />
            </View>
        </View>
        <TextInput style={SignUpStyles.inputField}
        placeholder='Email address'
        value={email}
        onChangeText={text => setEmail(text)}
        />
         <TextInput style={SignUpStyles.inputField}
        placeholder='Password'
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        />
           <TextInput style={SignUpStyles.inputField}
        placeholder='Re-enter Password'
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        />
        <View style={{marginTop:30}}> 
        <Pressable onPress={createAccount}> 
            {(state) => <Button pressed={state.pressed} buttonText="Create user"/>}
        </Pressable>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}