import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, } from 'react-native';

import styles, { liststyles , } from './stylesheet.js';
import {useValue} from './ValueProvider.js';

const SimpleClassesList = () => {
  const {currentValue} = useValue();
  const userClasses = currentValue.userClasses;

  return (

    <View style={styles.container}>

      <View style={{flex:10}}>
        <View style={liststyles.listBody}>
            <FlatList
              data={userClasses}
              renderItem={(userClass) => {
                return (
                  <View style={liststyles.listBox}>
                    <Text style={liststyles.listText}>{userClass.item.getName()}</Text>
                  </View>
                );
              }}
              keyExtractor={(userClasses) => userClasses.id}
            />
        </View>
      </View>


   </View>
   )
}

export default SimpleClassesList
