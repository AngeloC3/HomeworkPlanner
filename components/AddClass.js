import React, { useState, useRef , useEffect} from 'react';
import {Text, View, TextInput, FlatList, StyleSheet, Button} from 'react-native';

import styles, { textstyles , liststyles , } from './stylesheet.js';
import NavButtons from './NavigationButtons.js';
import Class from './Class.js'
import ClassList from './SimpleClassesList.js';
import {useValue} from './ValueProvider.js';
import {getClassesData , storeClassesData} from './AsyncStore.js'
import AsyncStorage from '@react-native-async-storage/async-storage';


const AddClass = () => {
  const [class2Add, setClass2Add] = useState(null);
  const [addedNull, setAddedNull] = useState(false);
  const inputRef = useRef();

  const {currentValue} = useValue();
  let userClasses = currentValue.userClasses;

  // useEffect(() => {getClassesData({userClasses})}
  //         ,[])
  // useEffect(() => {getClassesDataSameFileTest({userClasses})}
  //         ,[])
  useEffect(() => {userClasses.push(new Class('TEST'))}
          ,[])

  return (

    <View style={styles.container}>

      <View style={textstyles.title}>
          <Text style={textstyles.titleText} adjustsFontSizeToFit={true}>
            Your Classes:
          </Text>
          <Button
            color = 'blue'
            title = 'cons'
            onPress={() => {
               console.log('userClasses: ' + JSON.stringify(userClasses))
                  }}
            />
      </View>

      <View style={{flex:10}}>
        <ClassList userClasses={userClasses}/>
      </View>

      <View style={{flex:2,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

        <View style={{height: '100%', width:'50%',}}>
          <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder = 'Name of new class to add!'
                onChangeText={text => { setClass2Add(text) }}
            />
        </View>
        <View>
          <Button
            color = 'blue'
            title = 'Add this class!'
            onPress={() => {
               if (class2Add !== null && class2Add !== "") {
                 userClasses.push(new Class(class2Add));
                 inputRef.current.clear();
                 setClass2Add(null);
                 setAddedNull(false);
               } else{
                 setAddedNull(true);
               }
              //storeClassesData({userClasses})
                  }}
            />
        </View>


      </View>


   </View>
   )
}

const getClassesDataSameFileTest = async ({userClasses}) => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_info')
        let data = null
        if (jsonValue!=null) {
          data = JSON.parse(jsonValue)
          userClasses = data.userClasses
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

export default AddClass
