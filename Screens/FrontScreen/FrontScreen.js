import { View, ScrollView, Pressable, SafeAreaView, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../../Customs/Title'
import Button from '../../Customs/Button'
import FrontScreenStyles from './FrontScreenStyles'




export default function FrontScreen() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    require('../../assets/first1.png'),
    require('../../assets/first2.png'),
    require('../../assets/first4.png')
  ]

  useEffect(() => {
    setInterval(() => { //setinterval is an build in JavaScript function that repeatedly calls a function
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }, 5000);

    return () => clearInterval();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEF6EC' }}>
      <ScrollView>
        <View style={FrontScreenStyles.container}>
        <Title/>
          <Text style={{fontSize: 20, marginTop:50}}> Simple recipes</Text>
          <Image style={FrontScreenStyles.image}
          source={images[imageIndex]}/>
          <Pressable> 
            {(state) => <Button pressed={state.pressed} buttonText="Get Started"/>}
          </Pressable>
          <View style={FrontScreenStyles.signinrow}>
            <Text>Already a user? </Text>
            <Pressable>
              <Text style={{fontWeight:'bold'}}>Sign in here</Text>
            </Pressable>

          </View>
        
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}