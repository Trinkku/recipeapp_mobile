import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { COLORS } from './Colors'

export default function Categories({onCategorySelect}) {

  const handleClick = (category) => {
    onCategorySelect(category)
  }
  
  const handleClear = () => {
    onCategorySelect(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}> 
      <Text style={{alignSelf:'flex-start', marginLeft:10}}>categories</Text>
      <Pressable onPress={handleClear}>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>clear</Text>
      </Pressable>
      </View>
      <View style={styles.wrapper}> 
   
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" onPress={() => handleClick('asian')}>
            asian 🍱
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" onPress={() => handleClick('american')}>
            american 🍔
          </Button>
        </View>
      </View>
      <View style={styles.wrapper}> 
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" onPress={() => handleClick('italian')}>
            italian 🍝
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" onPress={() => handleClick('caribbean')}>
            caribbean 🍗
          </Button>
        </View>
      </View>
      <View style={styles.wrapper}> 
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" oonPress={() => handleClick('nordic')}>
            nordic 🧆
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} textColor="black" mode="contained" onPress={() => handleClick('chinese')}>
            chinese 🥡
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'column', 
    width: '100%', 
    alignItems: 'center',
   
  },
  wrapper: {
    display: 'flex', 
    flexDirection: 'row', 
    width: '90%', 
    marginBottom: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
    width: '40%',
  },
  innerContainer:{
    display:'flex', 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:'90%'
  },
  button: {
    backgroundColor: COLORS.lightOrange,
    borderRadius:10,
  },
})
