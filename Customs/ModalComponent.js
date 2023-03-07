import { View, Text, Modal,Pressable, StyleSheet } from 'react-native'
import React from 'react'
import ButtonSmall from './ButtonSmall'


const ModalComponent = ({isVisible, onClose, navigation}) => {



  return (
    <Modal isVisible={isVisible} animationType='slide' transparent={true}>
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Thank you for registering! Sign in now.</Text>
        <Text style={styles.label}>We have new recipes daily. selecting any layers and using the color picker from the Background section of the right sidebar.</Text>

      
          <Pressable onPress={() => navigation.navigate('Login')}> 
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
      height:'50%',
      width:'70%',
      justifyContent:'center',
      alignItems:'center',
      
   },
   title:{
    textAlign:'center',
    fontSize:25, 
    fontWeight:'bold',
    marginBottom:30,
   },
   label:{
    marginLeft:15,
    fontSize:15, 
    fontWeight:'light',
    marginBottom:30,
    color:'gray'
   }

})