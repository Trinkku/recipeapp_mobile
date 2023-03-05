import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './Screens/Navigators/LoginNavigator';

//axios ja navigaionit, myös bottom tab
export default function App() {

  return (

    <NavigationContainer>
      <LoginNavigator/>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
