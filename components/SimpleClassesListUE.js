import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';

import styles, { liststyles , } from './stylesheet.js';

const SimpleClassesList = ({state}) => {
  let debugging = false;
  let temp = state;
  //const [emptyList, setEmptyList] =


  return (

    <View style={styles.container}>

      {debugging === true &&
        <View>
          <Button
            color = 'blue'
            title = 'temp=?'
            onPress={() => {
                console.log(temp == "");
             }}
            />
        </View>
      }

      <View style={{flex:10}}>
        <View style={liststyles.listBody}>
          {temp != "" ?
            <FlatList
              data={temp}
              renderItem={(userClass) => {
                return (
                  <View style={liststyles.listBox}>
                    <Text style={liststyles.listText}>{userClass.item.name} </Text>
                  </View>
                );
              }}
              keyExtractor={(userClass) => userClass.name}
            />
          : <View style={liststyles.listBox}>
              <Text style={{alignSelf:'center', justifyContent:'center', fontSize:40,}}>
                No classes added yet
              </Text>
            </View>
          }
        </View>
      </View>


   </View>
   )
}

export default SimpleClassesList
