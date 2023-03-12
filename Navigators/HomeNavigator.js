import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../Screens/Favorites';

const Stack = createStackNavigator();

export default function HomeNavigator({navigation}) {
     
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: 'Favorites',
          headerStyle: {
            backgroundColor: COLORS.backgroundLight,
          },
          headerTintColor: COLORS.black,
        }}
      />
    </Stack.Navigator>
  );
}