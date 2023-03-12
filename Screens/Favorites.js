import React, {useState, useEffect} from 'react';
import { ScrollView, SafeAreaView, View} from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../Customs/Colors';



export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

  
  
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.backgroundLight }}>
        <SafeAreaView>
          <ScrollView style={{display:'flex'}}>
            {favorites.map((recipe) => (
              <Card key={recipe.recipe.uri} containerStyle={{borderRadius:10, width:'80%', alignSelf: 'center' }}>
                <Card.Image source={{ uri: recipe.recipe.image }} style={{marginBottom:10}} />
                <Card.Title textAlign="left" textAlignVertical="top">{recipe.recipe.label}</Card.Title>
                <Card.FeaturedSubtitle style={{ color:'black', textAlign: 'left', textAlignVertical: 'top' }}>
                <AntDesign name="clockcircleo" size={14} color="black" /> {recipe.recipe.totalTime} min </Card.FeaturedSubtitle>
              </Card>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
  )
}