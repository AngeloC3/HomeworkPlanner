import * as React from 'react';
import { useState , } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';

import styles, { textstyles } from './stylesheet.js';
import NavButtons from './NavigationButtons.js';
import AddClass from  './AddClass.js'
import {useValue} from './ValueProvider.js';

const ClassManagementScreen = ({ navigation }) => {
  const {currentValue} = useValue();
  let userClasses = currentValue.userClasses;

  return (


    <View style={styles.container}>

      <View style={textstyles.title}>
          <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Class Management </Text>
      </View>

      <View style={{flex:7, justifyContent: 'stretch', alignItems: 'stretch'}}>
          <AddClass />
      </View>

      <View style={{flex:2}}>
        <NavButtons navigation={navigation} />
      </View>

    </View>

  )
}

export default ClassManagementScreen
