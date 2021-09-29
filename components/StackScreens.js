import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { } from 'react-native';
import HomeScreen from './HomeScreen.js';
import AboutScreen from './AboutScreen.js';
import SettingsScreen from './SettingsScreen.js';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
        />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreens;
