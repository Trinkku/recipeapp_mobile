import { View, Text, Modal,Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import ButtonSmall from './ButtonSmall'


const ModalComponent = ({isVisible, navigation}) => {

  return (
    <Modal isVisible={isVisible} animationType='slide' transparent={true}>
     
    <View style={styles.container}>
      <View style={styles.content}>
      <Image style={{width:'30%', height:'30%', marginTop:30, marginBottom:30}} source={require('../assets/happyguy.png')}/>
      <Text style={styles.title}>Hey, welcome and</Text>
        <Text style={styles.title}>Thanks for registering!</Text>
        <View style={{marginTop:30,  alignItems:'center', marginBottom:30}}>
        <Text style={styles.label}>We are glad you’re here</Text>
        <Text style={styles.label}> We have new recipes daily</Text>
        <Text style={styles.label}> Enjoy!</Text>
        </View>
      
          <Pressable onPress={()=> navigation.navigate('Login')}> 
            {(state) => <ButtonSmall pressed={state.pressed} buttonText="Sign in"/>}
          </Pressable>
          </View>
    </View>
  </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
      backgroundColor:'#FFFFFF',
      borderColor:'gray',
      borderWidth: 1,
      borderRadius:20,
      height:'80%',
      width:'80%',
      alignItems:'center',
      
   },
   title:{
    marginLeft:20,
    marginRight:20,
    textAlign:'center',
    fontSize:25, 
    fontWeight:'bold',
   },
   label:{
    marginLeft:15,
    fontSize:15, 
    fontWeight:'light',
    color:'gray'
   }

})