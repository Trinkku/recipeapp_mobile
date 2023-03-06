import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const InputWithIcon = ({ icon, placeholder, ...rest }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name={icon} size={24} color="gray" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.inputField}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor:'#FFFFFF',
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
