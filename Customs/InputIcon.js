import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const InputWithIcon = ({ icon, placeholder,rightIcon ,...rest }) => {
  
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={24} color="gray" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.inputField}
        {...rest}
      />
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'#C5C8CA',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF',
    marginTop:2,
    marginBottom:20

  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    height: 50,
  },
});

export default InputWithIcon;
