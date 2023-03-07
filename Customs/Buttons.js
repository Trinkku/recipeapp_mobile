import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#4BBA47'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    customButton: {
        backgroundColor: '#FFBE9C',
        borderRadius: 45,
        alignItems: 'center',
        width: 300,
        borderColor: '#black',
        borderWidth: 1,
    
    },
    buttonText: {
        fontSize: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
     
     
        
    }
  })