import { View, Text, SafeAreaView, FlatList, ScrollView, } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-elements'
import { COLORS } from '../Customs/Colors'
import SearchBox from '../Customs/SearchBox'
import LinearGradient from 'react-native-linear-gradient';


export default function Home() {

  const [recipesData, setRecipesData] = useState([])

  useEffect(() => {
    axios
      .get(
      )
      .then((response) => {
        setRecipesData(response.data.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <View style={{ flex: 1, backgroundColor: COLORS.backgroundLight }}>
      <SafeAreaView>
        <SearchBox />
        <ScrollView>
          {recipesData.map((recipe) => (
            <Card key={recipe.recipe.uri}>
              <Card.Image source={{ uri: recipe.recipe.image }} />
              <Card.Title>{recipe.recipe.label}</Card.Title>
              <Card.Divider />
              <Card.FeaturedSubtitle>{`Cooking time: ${recipe.recipe.totalTime} min`}</Card.FeaturedSubtitle>
              {/*  <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.black, COLORS.transparent]}
                style={{height:200, justifyContent:'flex-end', paddingHorizontal:10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
              /> */}
            </Card>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>


  )
}