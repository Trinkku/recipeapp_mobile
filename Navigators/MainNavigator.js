import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'
import Favorites from '../Screens/Favorites'

import { COLORS } from '../Customs/Colors'
import { Button } from 'react-native-elements'





export default function MainNavigator({navigation}) {

    const Stack = createStackNavigator()

    const [isLeftHeaderClicked, setIsLeftHeaderClicked] = useState(true)


    const handleLeftHeaderClick = () => {
      setIsLeftHeaderClicked(false)
    }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle:'',
          headerLeft: () => (
            <Button
              onPress={() => console.log('reseptit')}
              title="browse recipes"
              buttonStyle={{
                backgroundColor: COLORS.backgroundLight,
                ...Platform.select({
                  ios: {
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                  },
                  android: {
                    borderRadius: 2,
                  },
                })
              }}
              titleStyle={{ color: COLORS.black }}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Favorites')}
              title="favorites"
              color={COLORS.black}
              buttonStyle={{
                backgroundColor: COLORS.backgroundLight,
                ...Platform.select({
                  ios: {
                    paddingVertical: 6,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                  },
                  android: {
                    borderRadius: 2,
                  },
                })
              }}
              titleStyle={{ color: COLORS.black }}
            />
          ),
          headerStyle:{
            backgroundColor: COLORS.backgroundLight,
          }
        }}
      />
      <Stack.Screen name="Favorites" 
      component={Favorites} 
      options={{
        headerTitle:'Favorites',
      
        headerStyle:{
          backgroundColor: COLORS.backgroundLight,
        }
      }} 
      />


</Stack.Navigator>

  )
}