import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { } from 'react-native';
import ClassManagementScreen from './ClassManagementScreen.js';
import AddAndDellClass from './AddAndDellClass.js';
import ViewClasses from './ViewClasses.js';

const Stack = createNativeStackNavigator();

const StackCMScreens = () => {
  return (
      <Stack.Navigator initialRouteName="Class Management"
      screenOptions={{headerShown: false}}
      >

        <Stack.Screen
          name="Class Management"
          component={ClassManagementScreen}
        />

        <Stack.Screen
          name="Add/Delete Class"
          component={AddAndDellClass}
        />

        <Stack.Screen
          name="View Classes"
          component={ViewClasses}
        />

      </Stack.Navigator>
  );
};

export default StackCMScreens;
