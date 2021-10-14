import * as React from 'react';
import { Text, View, Button, FlatList, } from 'react-native';

import styles, { liststyles, listwrap } from '../components/stylesheet.js';

const aboutBullets = [
                      'This app was made by Angelo Cataldo',
                      'This app was started on September 24th, 2021',
                      'This app has not yet been completed',
                    ];
const futureBullets = [
                        'Moifying homework data for classes',
                        'Viewing your homework on a calender',
                        'Viewing your homework in a class by class screen',
                        'Add settings to further customize the experience',
                        'Maybe combining add and delete class to one screen'
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
           keyExtractor={(aboutBullets) => aboutBullets.toString()}
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
            keyExtractor={(aboutBullets) => aboutBullets.toString()}
         />
      </View>
   </View>

  )
}

export default ListsAbout
