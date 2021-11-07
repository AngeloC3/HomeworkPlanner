import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { } from 'react-native';
import ClassManagementScreen from './ClassManagementScreen.js';
import ViewClasses from './ViewClasses.js';
import ModifyClassScreen from './ModifyClassScreen.js';
import ModifyHomeworkScreen from './ModifyHomework.js';
import AddDelScreen from './AddDelScreen.js';
import MHScreen from './ModifyHWScreen.js';

const Stack = createNativeStackNavigator();

const StackCMScreens = () => {
  return (
      <Stack.Navigator initialRouteName="Manage Classes"
      >

        <Stack.Screen
          name="Manage Classes"
          component={ClassManagementScreen}
        />

        <Stack.Screen
          name="Add/Delete Class"
          component={AddDelScreen}
        />

        <Stack.Screen
          name="View Classes"
          component={ViewClasses}
        />

        <Stack.Screen
          name="Modify Classes"
          component={ModifyClassScreen}
        />

        <Stack.Screen
          name="Modify Homework"
          component={ModifyHomeworkScreen}
        />

      </Stack.Navigator>
  );
};

export default StackCMScreens;
