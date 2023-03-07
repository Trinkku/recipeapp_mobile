import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function TabNavigators() {

    const Tab = createBottomTabNavigator()

  return (
   
    <Tab.Navigator>
        <Tab.Screen
        name='Main' options={{
            tabBarIcon:({color}) =>(
            <MaterialCommunityIcons name="chef-hat" size={24} color={color} />
            ),
        }}
        
        
        />

    </Tab.Navigator>


  )
}