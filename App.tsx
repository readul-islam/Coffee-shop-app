


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './src/navigators/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer
   
    >
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Tab' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
