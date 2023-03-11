import { View, Text, StatusBar, Button } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home'

import { COLORS } from '../Customs/Colors'
import Search from '../Customs/SearchBox'
import Recipe from '../Screens/Recipe'




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
              onPress={() => {console.log('reseptit')
              }
            }
              title="browse recipes"
              color={COLORS.black}
            />
          ),
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="favorites"
              color={COLORS.black}/>
          ),
          headerStyle:{
            backgroundColor:COLORS.backgroundLight,
          }
        }}
      />
      <Stack.Screen
        name='RecipePage'
        component={Recipe}
        options={{}}
      />

</Stack.Navigator>

  )
}