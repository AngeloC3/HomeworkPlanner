import React, { useState, useEffect} from 'react';
import {Text, View, TextInput, FlatList, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles, textstyles , liststyles , midPercentage} from './stylesheet.js';
import Class from './Class.js'
import ClassList from './ClassHWList.js';
import {getClassesData , storeClassesData, } from './AsyncStore.js'
import ScreenTemplate from './ScreenTemplate.js';

const ViewClasses = ({navigation}) => {
  let debugging = false;
  const [classState, setClassState] = useState([]);

  useEffect(() => {getClassesData(setClassState)}
          ,[])

  return (

        <ScreenTemplate
            title={"View Classes"}
            midStyle={styles.midAlt} >
          <ClassList state={classState}/>
        </ScreenTemplate>

   )
}



export default ViewClasses
