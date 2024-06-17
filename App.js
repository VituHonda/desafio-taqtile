import * as React from 'react';
import List from './components/List';
import Detail from './components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex Geração 1" component={List} />
        <Stack.Screen name="Detalhes" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
