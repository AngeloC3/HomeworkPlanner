import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { } from 'react-native';
import ClassManagementScreen from './ClassManagementScreen.js';
import AddClassUE from './AddClassUE.js';
import DeleteClass from './DeleteClass.js';

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
          name="Add Class"
          component={AddClassUE}
        />

        <Stack.Screen
          name="Delete Class"
          component={DeleteClass}
        />

      </Stack.Navigator>
  );
};

export default StackCMScreens;
