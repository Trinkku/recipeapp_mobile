import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ButtonSmall({buttonText, pressed}) {
  return (
    <View style={[styles.customButton, pressed && {backgroundColor: '#4BBA47'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    customButton: {
        backgroundColor: '#FD7BA580',
        borderRadius: 45,
        alignItems: 'center',
        width: 200,
        height:50,
        borderColor: '#black',
        borderWidth: 1,
    
    },
    buttonText: {
        fontSize: 20,
        marginTop:10,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        fontWeight:'bold'
     
        
    }
  })