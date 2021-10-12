import * as React from 'react';
import {View, Text } from 'react-native';

import styles from './components/stylesheet.js';
import StackScreens from './components/StackScreens.js';
import Class from './components/Class.js'
//import AddClass from './components/AddClass.js'
//import ClassList from './components/SimpleClassesList.js'
//import Cms from './components/ClassManagementScreen.js'
//import ValueToScreens from './components/ValueToScreens.js'

export default function App() {

  return (

    <View style={styles.container}>

      <StackScreens />

    </View>

  );
}
