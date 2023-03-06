import { getAuth, createUserWithEmailAndPassword, setDoc, firestore, doc, USER} from '../../Config';
import { View, Text, ScrollView, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../Customs/Title'
import SignUpStyles from './SignUpStyles'
import Button from '../../Customs/Button';
import InputWithIcon from '../../Customs/InputIcon';
import ModalComponent from '../../Customs/ModalComponent';

export default function SignUpScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [showModal, setShowModal] = useState(false)

    const createAccount = async () => {
        if (password === confirmPassword) {
          try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await setDoc(doc(firestore, USER, user.uid), {
              firstname,
              lastname,
              username,
              email,
            });
            setShowModal(true)
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
        <View style={SignUpStyles.signUpForm}>
            <Text style={{justifyContent:'flex-start'}}>Username</Text>
            <InputWithIcon icon="person" 
            placeholder="Username" 
            value={username} 
            onChangeText={text => setUsername(text)}/>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', width:'90%', maxWidth:338}}> 
          <View style={SignUpStyles.signUpForm1}>
              <Text style={{justifyContent:'flex-start'}}>First name</Text>
              <InputWithIcon icon="person" 
              placeholder="First name" 
              value={firstname} 
              onChangeText={text => setFirstName(text)}/>
          </View>
          <View style={SignUpStyles.signUpForm1}>
              <Text style={{justifyContent:'flex-start'}}>Last name</Text>
              <InputWithIcon icon="person" 
              placeholder="Last name" 
              value={lastname} 
              onChangeText={text => setLastName(text)}/>
          </View>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={{justifyContent:'flex-start'}}>Email</Text>
            <InputWithIcon icon="email" 
            placeholder="Email Adress" 
            value={email} 
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={{justifyContent:'flex-start'}}>Password</Text>
            <InputWithIcon icon="lock" 
            placeholder="Password" 
            secureTextEntry={true}
            value={password} 
            onChangeText={text => setPassword(text)}/>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={{justifyContent:'flex-start'}}>Confirm Password</Text>
            <InputWithIcon icon="lock" 
            secureTextEntry={true}
            placeholder="Re-enter password" 
            value={confirmPassword} 
            onChangeText={text => setConfirmPassword(text)}/>
        </View>
        

        <View style={{marginTop:30, justifyContent:'center'}}> 
        <Pressable onPress={createAccount}> 
            {(state) => <Button pressed={state.pressed} buttonText="Create user"/>}
        </Pressable>
        </View>
        {showModal && (
        <ModalComponent isVisible={showModal} onClose={() => setShowModal(false)} />
        )}

    </ScrollView>
   </SafeAreaView>
  )
}