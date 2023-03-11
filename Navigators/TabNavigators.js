import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



import Home from '../Screens/Home';
import Recipes from '../Screens/SignUpScreen/Recipes';
import ShoppingList from '../Screens/ShoppingList';
import MainNavigator from './MainNavigator';

import { COLORS } from '../Customs/Colors';


export default function TabNavigators() {

  const Tab = createBottomTabNavigator()

  return (
   
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:COLORS.orange,
        tabBarInactiveTintColor:COLORS.lightOrange,
          tabBarStyle:{
            height:80,
            backgroundColor:COLORS.white,
            ...(Platform.OS === 'android' && { elevation: 0, borderWidth: 1, borderColor: COLORS.gray }),
          }
      

      }}
    >
         <Tab.Screen
          name="Main" 
          options={{
            tabBarIcon:({color, focused}) => (
            <MaterialCommunityIcons focused={focused} name="chef-hat" size={24} color={color} /> 
             ),
          title: "Home",
          headerShown:false
          }}    component={MainNavigator}/>

      
        <Tab.Screen
        name='Recipes' 
        options={{
          tabBarIcon:({color, focused}) => (
          <MaterialCommunityIcons focused={focused} name="silverware-fork-knife" size={24} color={color} /> 
            ),
            title:'Recipes'
        }} component={Recipes}
        />
     <Tab.Screen name='Shoppinglist' 
      options={{
        tabBarIcon:({color, focused}) => (
        <MaterialCommunityIcons name="clipboard-list-outline"  size={24} color={color} />
            ),
            title:'Shoppinglist',
            headerShown:false
        }} component={ShoppingList}
        />
    </Tab.Navigator>


  )
}