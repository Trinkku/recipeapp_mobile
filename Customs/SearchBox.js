import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed';
import { COLORS } from './Colors';

export default function SearchBox() {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    ClearHandle = () => {
      setSearch('')
    }
    
    return (
      <View style={{ justifyContent: 'center', alignItems:'center'}}>
        <View style={{ width: '90%', maxWidth: 500 }}>
        <SearchBar
          containerStyle={{backgroundColor:COLORS.backgroundLight}}
          inputContainerStyle={{backgroundColor: COLORS.white, borderColor: COLORS.gray , borderWidth:1, borderRadius:20, borderBottomWidth:1}}
          inputStyle={{fontSize:12}}
          onClear={ClearHandle}
          placeholder="Search by ingredients or recipes"
          onChangeText={updateSearch}
          value={search}
          lightTheme={true}
          showLoading={false}
          platform="ios"
          cancelButtonTitle="Cancel"
        
         
          

          
                 />
       </View>
      </View>
  )
}