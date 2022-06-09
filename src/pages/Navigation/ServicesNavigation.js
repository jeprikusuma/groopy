import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Grooming from '../Screens/Grooming';

const Stack = createNativeStackNavigator();

function ServicesNavigation({route}) {
  return (
      <Stack.Navigator initialRouteName = "Home" 
            screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} initialParams={{user: route.params.user}}/>
        <Stack.Screen name="Grooming" component={Grooming} />
      </Stack.Navigator>
  );
}

export default ServicesNavigation;