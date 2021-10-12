import React, { useState, useRef , useEffect} from 'react';
import {Text, View, TextInput, FlatList, Button, TouchableOpacity} from 'react-native';

import styles, { textstyles , liststyles , touchstyles , } from './stylesheet.js';
import Class from './Class.js'
import {getClassesData , storeClassesData, clearAll} from './AsyncStore.js'
import AsyncStorage from '@react-native-async-storage/async-storage';


const DeleteClass = () => {
  let debugging = true;
  const [classState, setClassState] = useState(null);

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

      {debugging === true &&
        <View>
          <Button
            color = 'blue'
            title = 'classState=?'
            onPress={() => {
                console.log("classState: " + JSON.stringify(classState));
                console.log("userClasses: " + JSON.stringify(userClasses));
             }}
            />
        </View>
      }

      <View style={textstyles.title}>
          <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Your Classes </Text>
      </View>

      <View style={{flex:10}}>
        <View style={liststyles.listBody}>
          {classState != "" ?
            <FlatList
              data={classState}
              extraData={true}
              renderItem={(userClass) => {
                return (
                  <View style={liststyles.listBox}>
                    <TouchableOpacity
                      style={touchstyles.touch}
                      onPress={() => {
                        const index = classState.indexOf(userClass.item);
                        console.log("Index: " + index);
                        console.log("ClassState[i]: " + JSON.stringify(classState[index]));
                          if (index >= 0) {
                            classState.splice(index, 1);
                            setClassState(classState);
                            console.log('Splicing')
                          }
                        console.log("classState: " + JSON.stringify(classState));
                        }}
                      >
                      <Text style={liststyles.listText}> {userClass.item.name} </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              keyExtractor={(userClass) => userClass.name}
            />
          : <View style={liststyles.listBox}>
              <Text style={{alignSelf:'center', justifyContent:'center', fontSize:40,}}>
                No classes to delete
              </Text>
            </View>
          }
        </View>
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
   )
}



export default DeleteClass
