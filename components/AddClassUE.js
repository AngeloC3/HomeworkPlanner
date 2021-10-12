import React, { useState, useRef , useEffect} from 'react';
import {Text, View, TextInput, FlatList, Button, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles, { textstyles , liststyles , } from './stylesheet.js';
import Class from './Class.js'
import ClassListUE from './SimpleClassesListUE.js';
import {getClassesData , storeClassesData, clearAll} from './AsyncStore.js'
import GoBack from './GoBack.js';


const AddClass = ({navigation}) => {
  let debugging = true;
  const [class2Add, setClass2Add] = useState(null);
  const [addedNull, setAddedNull] = useState(false);
  const inputRef = useRef();
  const [classState, setClassState] = useState([]);

  // useEffect(() => {getClassesData({userClasses})}
  //         ,[])
  useEffect(() => {getClassesDataSameFileTest()}
          ,[])

  const getClassesDataSameFileTest = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@user_info')
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

    <View style={styles.container}>

    <View style={{flexDirection:'row'}}>

      <View style={{flex:1}}>
        <GoBack navigation={navigation}/>
      </View>

      <View style={{flex:7}}>
        <View style={textstyles.title}>
            <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Your Classes </Text>
        </View>
      </View>

    </View>

      <View style={{flex:10}}>
        <ClassListUE state={classState}/>
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
              console.log("class2add: " + class2Add)
               if (class2Add !== null && class2Add !== "") {
                 classState.push(new Class(class2Add))
                 setClassState(classState);
                 inputRef.current.clear();
                 setClass2Add(null);
                 setAddedNull(false);
               } else{
                 setAddedNull(true);
               }
               const userInfo = {userClasses:classState};
               console.log('data='+JSON.stringify(userInfo));
               storeClassesData(userInfo)
                  }}
            />
        </View>
        {debugging === true &&
          <View>
            <Button
              color = 'blue'
              title = 'Clear data!'
              onPress={() => {
                 clearAll();
               }}
              />
          </View>
         }


      </View>


   </View>
   )
}



export default AddClass
