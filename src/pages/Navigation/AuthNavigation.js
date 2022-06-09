import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, NavigationContainer  } from '@react-navigation/native';
import Login from '../Screens/Login';
import Blank from '../Screens/Blank';
import Welcome from '../Screens/Welcome';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
    const theme = {
        ...DefaultTheme,
        colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
        },
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName = "Blank" 
                screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Blank" component={Blank} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default AuthNavigation;