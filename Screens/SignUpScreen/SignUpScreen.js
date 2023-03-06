import { getAuth, createUserWithEmailAndPassword, setDoc, firestore, doc, USER} from '../../Config';
import { View, Text, ScrollView, TextInput, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../Customs/Title'
import SignUpStyles from './SignUpStyles'
import Button from '../../Customs/Button';
import InputWithIcon from '../../Customs/InputIcon';



export default function SignUpScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')


    const createAccount = async () => {
        if (password === confirmPassword) {
          try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created with UID: ", user.uid);
            console.log("Saving user with UID: ", user.uid);
            await setDoc(doc(firestore, USER, user.uid), {
              firstname,
              lastname,
              username,
              email,
            });
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          }
        } else {
          alert("Passwords do not match");
        }
      };
      
    
  return (
    
   <SafeAreaView style={SignUpStyles.container}>
    <Title/>
    <ScrollView contentContainerStyle={SignUpStyles.signUpContainer} bounces={false}>
        <View style={SignUpStyles.signUpContainer}>
            <Text>Username</Text>
            <InputWithIcon icon="person" 
            placeholder="Username" 
            value={username} 
            onChangeText={text => setUsername(text)}/>
        </View>
      {/*   <View style={SignUpStyles.signUpContainer}>
            <Text style={{marginLeft:10}}>Username</Text>
            <TextInput style={SignUpStyles.inputField}
            placeholder='Username'
            value={username}
            /> 
        </View>*/}
        <View style={{flexDirection:'row', alignItems:'center', width:'90%', maxWidth:338}}>
            <Text> Firtsname</Text>
            <Text> Lastname</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'20%'}}>
            <View style={{flexDirection:'row', maxWidth:338}}>
                <InputWithIcon icon="person" placeholder="Username" value={username} onChangeText={text => setUsername(text)}/>
                <InputWithIcon icon="person" placeholder="Username" value={username} onChangeText={text => setUsername(text)}/>
            </View>
        </View>
        <View style={SignUpStyles.signUpContainer}>
            <Text>Username</Text>
            <InputWithIcon icon="email" 
            placeholder="Email address" 
            value={email} 
            onChangeText={text => setEmail(text)}/>
        </View>

        <View style={SignUpStyles.signUpContainer}>
            <Text>Password</Text>
            <InputWithIcon icon="lock" 
            placeholder="Password" 
            value={password} 
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}/>
        </View>
        <View style={SignUpStyles.signUpContainer}>
            <Text>Re-enter password</Text>
            <InputWithIcon icon="lock" 
            placeholder="Re-enter password" 
            value={confirmPassword} 
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}/>
        </View>
        
        <View style={{marginTop:30}}> 
        <Pressable onPress={createAccount}> 
            {(state) => <Button pressed={state.pressed} buttonText="Create user"/>}
        </Pressable>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}