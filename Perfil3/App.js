import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/screens/ProfileScreen';
import CharactersScreen from './src/screens/CharactersScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Mi perfil' }} />
        <Stack.Screen name="Characters" component={CharactersScreen} options={{ title: 'Personajes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
