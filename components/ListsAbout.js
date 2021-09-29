import * as React from 'react';
import { StyleSheet, Text, View, Button, FlatList, } from 'react-native';

import styles, { liststyles } from '../components/stylesheet.js';

const aboutBullets = [
                      'This app was made by Angelo Cataldo',
                      'This app was started on September 24th, 2021',
                      'This app has not yet been completed',
                    ];
const futureBullets = [
                        'Adding classes',
                        'Moifying homework data for those classes',
                        'Viewing your homework on a calender',
                        'Viewing your homework in a class by class screen',
                        'Add settings to further customize the experience'
                      ];

const ListsAbout = () => {
  return (

    <View style={liststyles.listBody}>
      <View style={listwrap.innerList}>
         <Text style={liststyles.listTitleText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                >
              About this app
          </Text>
         <FlatList
           data={aboutBullets}
           renderItem={(bullet) => {
             return (
               <View style={liststyles.listBox}>
                 <Text>{bullet.item}</Text>
               </View>
             );
           }}
           keyExtractor={(aboutBullets) => aboutBullets.id}
         />
      </View>
      <View style={listwrap.innerList}>
         <Text style={liststyles.listTitleText}
                adjustsFontSizeToFit={true}
                numberOfLines={1}
                  >
              Future Implementations
          </Text>
         <FlatList
           data={futureBullets}
           renderItem={(bullet) => {
             return (
               <View style={liststyles.listBox}>
                 <Text>{bullet.item}</Text>
               </View>
             );
           }}
         />
      </View>
   </View>

  )
}

const listwrap = StyleSheet.create({
  middleBody: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerList: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default ListsAbout
