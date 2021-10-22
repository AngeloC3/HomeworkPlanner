import React, { useState, useEffect} from 'react';
import {Text, View, TextInput, FlatList, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles, textstyles , liststyles , } from './stylesheet.js';
import Class from './Class.js'
import ClassList from './ClassHWList.js';
import {getClassesData , storeClassesData, } from './AsyncStore.js'
import GoBack from './GoBack.js';


const ViewClasses = ({navigation}) => {
  let debugging = false;
  const [classState, setClassState] = useState([]);

  useEffect(() => {getClassesData(setClassState)}
          ,[])

  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

            <View style={textstyles.title}>
                <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Your Classes </Text>
            </View>

          <View style={{flex:10}}>
            <ClassList state={classState}/>
          </View>


       </View>
      </ScrollView>

   )
}



export default ViewClasses
