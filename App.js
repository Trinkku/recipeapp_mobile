import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './Navigators/LoginNavigator';
import LinearGradient from 'react-native-linear-gradient';
import TabNavigators from './Navigators/TabNavigators';
import { AuthContext } from './context/Authcontext';
import { useState } from 'react';
import Home from './Screens/Home';

export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  const authContext = {isLogged, setIsLogged};

  return (

    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        {isLogged ? <TabNavigators /> : <LoginNavigator />}
      </AuthContext.Provider>
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
