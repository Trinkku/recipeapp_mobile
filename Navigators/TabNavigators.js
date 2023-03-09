import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import Home from '../Screens/Home';
import Recipes from '../Screens/SignUpScreen/Recipes';
import ShoppingList from '../Screens/ShoppingList';
import MainNavigator from './MainNavigator';



export default function TabNavigators() {
  const Tab = createBottomTabNavigator()


  return (
   
    <Tab.Navigator
      tabBarOptions={{
        style:{
          position:'absolute',
          bottom:0,
          right:0,
          left: 0,
          elevation:0,
        }
      }}
      >
         <Tab.Screen
          name="Main" 
          options={{
            tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="chef-hat" size={24} color={color} />
             ),
          title: "Home"
          }}    component={MainNavigator}/>

      
        <Tab.Screen
        name='Recipes' options={{
            tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="chef-hat" size={24} color={color} />
            ),
            title:'recipes'
        }} component={Recipes}
        />
     <Tab.Screen name='Shoppinglist' 
     options={{
            tabBarIcon:({color}) => (
            <MaterialCommunityIcons name="chef-hat" size={24} color={color} />
            ),
            title:'shoppinglist'
        }} component={ShoppingList}
        />
    </Tab.Navigator>


  )
}