import { View, Text, Modal,Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const ModalComponent = ({isVisible, onClose}) => {

  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate('')
  }
  return (
    <Modal isVisible={isVisible} animationType='slide' transparent={true}>
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Text style={{textAlign:'center',fontSize:20}}>Thank you for registering! Sign in now.</Text>
        <Button title="Sign in"  />
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
      backgroundColor:'#FAEDED',
      borderColor:'gray',
      borderWidth: 1,
      borderRadius:20,
      height:'50%',
      width:'70%',
      justifyContent:'center'
   }

})