import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//import { } from 'react-native';
import HomeScreen from './HomeScreen.js';
import StackCMScreens from './StackCMScreens.js';
import AboutScreen from './AboutScreen.js';
import SettingsScreen from './SettingsScreen.js';
import AddClassUE from './AddClassUE.js';
import DeleteClass from './DeleteClass.js';

const Tab = createBottomTabNavigator();

const StackScreens = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Class Management" component={StackCMScreens} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackScreens;
