import React, {useMemo} from 'react';
import { Text, View, Button, FlatList, } from 'react-native';
import {useTheme} from '@react-navigation/native';

import {getListStyles, listwrap } from '../components/stylesheet.js';

const aboutBullets = [
                      'This app was made by Angelo Cataldo',
                      'This app was started on September 24th, 2021',
                      'This app has not yet been completed',
                    ];
const futureBullets = [
                        'Viewing your homework on a calender',
                        'Add more settings to further customize the experience',
                        'Possibly allowing the user to change the date of homework' +
                          ' without deleting it and making a new one',
                      ];

const ListsAbout = () => {
  const theme  = useTheme();
  const liststyles = useMemo(() => getListStyles(theme));

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
                 <Text style={liststyles.listText}>{bullet.item}</Text>
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
                 <Text style={liststyles.listText}>{bullet.item}</Text>
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
