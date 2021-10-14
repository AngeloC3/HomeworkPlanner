import React, { useState, useEffect} from 'react';
import {Text, View, TextInput, FlatList, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles, { textstyles , liststyles , } from './stylesheet.js';
import Class from './Class.js'
import ClassListUE from './SimpleClassesListUE.js';
import {getClassesData , storeClassesData, } from './AsyncStore.js'
import GoBack from './GoBack.js';


const ViewClasses = ({navigation}) => {
  let debugging = false;
  const [classState, setClassState] = useState([]);

  // useEffect(() => {getClassesData({userClasses})}
  //         ,[])
  useEffect(() => {getClassesDataSameFileTest()}
          ,[])

  const getClassesDataSameFileTest = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@user_classes')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setClassState(data.userClasses)
            console.log('just set userClasses: ' + JSON.stringify(data.userClasses))
          } else {
            console.log('just read a null value from Storage')
          }


        } catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
        }
  }

  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

        <View style={{flexDirection:'row'}}>

          <View style={{width:'33.33%'}}>
            <GoBack navigation={navigation}/>
          </View>

          <View style={{width:'66.67%'}}>
            <View style={textstyles.title}>
                <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Your Classes </Text>
            </View>
          </View>

        </View>

          <View style={{flex:10}}>
            <ClassListUE state={classState}/>
          </View>


       </View>
      </ScrollView>

   )
}



export default ViewClasses
