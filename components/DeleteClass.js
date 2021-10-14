import React, { useState, useRef , useEffect} from 'react';
import {Text, View, TextInput, FlatList, Button, TouchableOpacity, Alert, Platform, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles, { textstyles , liststyles , touchstyles , } from './stylesheet.js';
import Class from './Class.js'
import {getClassesData , storeClassesData, clearAll} from './AsyncStore.js'
import GoBack from './GoBack.js';

const DeleteClass = ({navigation}) => {
  let debugging = false;
  const [classState, setClassState] = useState(null);
  const [key, setKey] = useState('refresha');
  let isSure = true;

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

        {debugging === true &&
          <View>
            <Button
              color = 'blue'
              title = 'classState=?'
              onPress={() => {
                  console.log("classState: " + JSON.stringify(classState));
               }}
              />
          </View>
        }

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
          <View style={liststyles.listBody}>
            {classState != "" ?
              <FlatList
                data={classState}
                key={key}
                renderItem={(userClass) => {
                  return (
                    <View style={liststyles.listBox}>
                      <TouchableOpacity
                        style={touchstyles.touch}
                        onPress={() => {
                          if (Platform.OS !== "web") {
                            Alert.alert(
                              "Confirm",
                              "Are you sure you wish to delete " + userClass.item.name + "?",
                              [
                                {
                                  text: "Yes", onPress: () => {
                                    const index = classState.indexOf(userClass.item);
                                    console.log("Index: " + index);
                                    console.log("ClassState[i]: " + JSON.stringify(classState[index]));
                                      if (index >= 0) {
                                        classState.splice(index, 1);
                                        setClassState(classState);
                                        console.log('Splicing')
                                      }
                                    console.log("classState: " + JSON.stringify(classState));
                                    const userInfo = {userClasses:classState};
                                    console.log('data='+JSON.stringify(userInfo));
                                    storeClassesData(userInfo)
                                    if (key === 'refresha') {
                                      setKey('refreshb');
                                    } else {
                                      setKey('refresha');
                                    }
                                  }
                                },
                                { text: "No", }
                              ]
                            );
                          }
                          else { // This is because Alert doesnt show on web
                            const index = classState.indexOf(userClass.item);
                            console.log("Index: " + index);
                            console.log("ClassState[i]: " + JSON.stringify(classState[index]));
                              if (index >= 0) {
                                classState.splice(index, 1);
                                setClassState(classState);
                                console.log('Splicing')
                              }
                            console.log("classState: " + JSON.stringify(classState));
                            const userInfo = {userClasses:classState};
                            console.log('data='+JSON.stringify(userInfo));
                            storeClassesData(userInfo)
                            if (key === 'refresha') {
                              setKey('refreshb');
                            } else {
                              setKey('refresha');
                            }
                          }
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
    </ScrollView>

   )
}

export default DeleteClass
