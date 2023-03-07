import { View, Text } from 'react-native'
import React from 'react'

export default function Title({titleText}) {
  return (
    <View>
      <Text style={{fontSize:30, marginTop:20}}>{titleText}</Text>
    </View>
  )
}