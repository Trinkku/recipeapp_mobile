import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect, useFocusEffect } from 'react';
import { Card } from 'react-native-elements'
import { COLORS } from '../Customs/Colors'
import SearchBox from '../Customs/SearchBox'
import LinearGradient from 'react-native-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import Categories from '../Customs/Categories'
import { CardFeaturedSubtitle } from '@rneui/base/dist/Card/Card.FeaturedSubtitle';

export default function Home() {

  const [recipesData, setRecipesData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    axios
    .get(
      'https://api.edamam.com/api/recipes/v2?type=public&app_id=07ffe391&app_key=05c632c2c07116738e989293fc738174&cuisineType=American&cuisineType=Asian&cuisineType=Caribbean&cuisineType=Chinese&cuisineType=Italian&cuisineType=Nordic&mealType=Dinner&imageSize=REGULAR&field=uri&field=label&field=image&field=ingredients&field=totalTime&field=cuisineType&field=mealType'
    )
      .then((response) => {
        setRecipesData(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <View style={styles.container}>
       <SearchBox />
      <Categories onCategorySelect={setSelectedCategory}/>
      <SafeAreaView>
        <ScrollView style={{display:'flex'}}>
        {recipesData 
          .filter(recipe => {
            const isIncluded = selectedCategory ? recipe.recipe.cuisineType?.includes(selectedCategory) : true;
            return isIncluded;
          })
          .map((recipe) => (
          <Card key={recipe.recipe.uri} containerStyle={styles.cardContainer}>
            <Card.Image source={{ uri: recipe.recipe.image }} style={{marginBottom:10}} />
            <Card.Title textAlign="left" textAlignVertical="top" style={{ alignSelf: 'flex-start' }}>
              {recipe.recipe.label}
            </Card.Title>              
            <Card.FeaturedSubtitle style={styles.cardSubtitle}>
              <AntDesign name="clockcircleo" size={14} color="black" /> {recipe.recipe.totalTime} min
            </Card.FeaturedSubtitle>      
            
          </Card>
  ))}

        </ScrollView>
        
      </SafeAreaView>
    </View>


  )
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  backgroundColor: COLORS.backgroundLight 
},
cardContainer:{
  borderRadius:10, 
  width:'90%', 
  alignSelf: 'center' 
},
cardSubtitle:{
  color: 'black', 
  textAlign: 'left', 
  textAlignVertical: 'top', 
  alignSelf: 'flex-start' 
}

})