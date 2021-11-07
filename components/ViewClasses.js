import React, { useState, useEffect, useMemo} from 'react';
import {Text, View, TextInput, FlatList, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';

import {getStyles} from './stylesheet.js';
import ClassList from './ClassHWList.js';
import {getClassesData, } from './AsyncStore.js'
import ScreenTemplate from './ScreenTemplate.js';

const ViewClasses = ({navigation}) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));

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
