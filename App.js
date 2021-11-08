import * as React from 'react';
import {View, } from 'react-native';

import TabScreens from './components/TabScreens.js';
//import Class from './components/Class.js';
//import AddClass from './components/AddClass.js'
//import ClassList from './components/SimpleClassesList.js'
//import Cms from './components/ClassManagementScreen.js'
import ValueToScreens from './components/ValueToScreens.js'
//import StackCMScreens from './components/StackCMScreens.js';
//import HomeScreen from './components/HomeScreen.js';

export default function App() {

  return (

    <View style={{flex: 1,}}>

      <ValueToScreens />

    </View>

  );
}
