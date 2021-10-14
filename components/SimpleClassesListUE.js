import React, {useState} from 'react';
import {Text, View, FlatList, Button, StyleSheet} from 'react-native';

import styles, { liststyles , } from './stylesheet.js';

const SimpleClassesList = ({state}) => {
  let debugging = false;

  return (

    <View style={styles.container}>

      <View style={{flex:10}}>
        <View style={liststyles.listBody}>
          {state != "" ?
            <FlatList
              data={state}
              renderItem={(userClass) => {
                return (
                  <View style={liststyles.listBox}>
                    <Text style={classliststyles.listTitleText}>{userClass.item.name} </Text>
                    {userClass.item.homework != "" ?
                      <Text style={classliststyles.listText}>Homework: {userClass.item.homework} </Text> :
                      <Text style={classliststyles.listText}>Homework: None </Text>
                     }
                  </View>
                );
              }}
              keyExtractor={(userClass) => userClass.name}
            />
          : <View style={liststyles.listBox}>
              <Text style={liststyles.emptyListText}>
                No current classes
              </Text>
            </View>
          }
        </View>
      </View>


   </View>
   )
}

const classliststyles = StyleSheet.create({
  listTitleText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  listText: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },
});

export default SimpleClassesList
