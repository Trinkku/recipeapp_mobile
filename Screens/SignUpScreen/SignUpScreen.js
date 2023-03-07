import { getAuth, createUserWithEmailAndPassword, setDoc, firestore, doc, USER} from '../../Config';
import { View, Text, ScrollView, Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../../Customs/Title'
import SignUpStyles from './SignUpStyles'
import Buttons from '../../Customs/Buttons';
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

    const navigation = useNavigation();

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
    <Title titleText='LeCook'/>
    <ScrollView contentContainerStyle={SignUpStyles.signUpContainer} bounces={false}>
        <View style={SignUpStyles.signUpForm}>
            <Text style={SignUpStyles.label}>Username</Text>
            <InputWithIcon icon="person" 
            placeholder="Username" 
            value={username} 
            onChangeText={text => setUsername(text)}/>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', width:'90%'}}> 
          <View style={SignUpStyles.signUpForm1}>
              <Text style={SignUpStyles.label}>First name</Text>
              <InputWithIcon icon="person" 
              placeholder="First name" 
              value={firstname} 
              onChangeText={text => setFirstName(text)}/>
          </View>
          <View style={SignUpStyles.signUpForm1}>
              <Text style={SignUpStyles.label}>Last name</Text>
              <InputWithIcon icon="person" 
              placeholder="Last name" 
              value={lastname} 
              onChangeText={text => setLastName(text)}/>
          </View>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={SignUpStyles.label}>Email Adress</Text>
            <InputWithIcon icon="email" 
            placeholder="Email Address" 
            value={email} 
            onChangeText={text => setEmail(text)}/>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={SignUpStyles.label}>Password</Text>
            <InputWithIcon icon="lock" 
            placeholder="Password" 
            secureTextEntry={true}
            value={password} 
            onChangeText={text => setPassword(text)}/>
        </View>
        <View style={SignUpStyles.signUpForm}>
            <Text style={SignUpStyles.label}>Confirm Password</Text>
            <InputWithIcon icon="lock" 
            secureTextEntry={true}
            placeholder="Re-enter password" 
            value={confirmPassword} 
            onChangeText={text => setConfirmPassword(text)}/>
        </View>
        

        <View style={{marginTop:30, justifyContent:'center'}}> 
        <Pressable onPress={createAccount}> 
            {(state) => <Buttons pressed={state.pressed} buttonText="Create user"/>}
        </Pressable>
        </View>
        {showModal && (
        <ModalComponent isVisible={showModal} navigation={navigation}  />
        )}

    </ScrollView>
   </SafeAreaView>
  )
}