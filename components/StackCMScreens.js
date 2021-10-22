import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { } from 'react-native';
import ClassManagementScreen from './ClassManagementScreen.js';
import AddAndDellClass from './AddAndDellClass.js';
import ViewClasses from './ViewClasses.js';
import ModifyClassScreen from './ModifyClassScreen.js';
import ModifyHomeworkScreen from './ModifyHomeworkScreen.js';

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
          component={AddAndDellClass}
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
