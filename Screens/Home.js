import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { Header } from 'react-native-elements'
import { COLORS } from '../Customs/Colors'
import SearchBox from '../Customs/SearchBox'


export default function Home() {
  return (
    <View style={{flex:1, backgroundColor:COLORS.backgroundLight}}> 
    <SafeAreaView >
      <ScrollView> 
     
      <SearchBox/>
      <Text>momo</Text>
      </ScrollView>
</SafeAreaView>
</View>
   

  )
}