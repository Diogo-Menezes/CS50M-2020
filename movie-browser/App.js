import React from 'react';
import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' headerMode='none'>
          <Stack.Screen name='Main' component={MainScreen} />
          <Stack.Screen name='Detail' component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default App;
