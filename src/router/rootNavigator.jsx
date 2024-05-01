import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabRouter';
import {
  CHARACTERDETAIL,
  FILTERCHARACTER,
  SEARCHCHARACTER,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/CharacterDetail';
import Colors from '../theme/colors';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BGCOLOR,
        },
        headerBackTitle: 'Back',
        headerBackTitleStyle: {
          fontSize: 12,
        },

        headerTintColor: Colors.ORANGE,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTER} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTER} component={SearchCharacters} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
