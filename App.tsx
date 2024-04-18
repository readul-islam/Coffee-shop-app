// import {StyleSheet,View} from 'react-native';
// import React from 'react';
// import HomeScreen from './src/screen/HomeScreen';
// import DetailsScreen from './src/screen/DetailsScreen';
// import PaymentScreen from './src/screen/PaymentScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TabNavigator from './src/navigators/TabNavigator';
// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//    <Stack.Navigator>
//     <Stack.Screen name='a' component={DetailsScreen}></Stack.Screen>
//    </Stack.Navigator>
//   </NavigationContainer>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screen/DetailsScreen';
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
