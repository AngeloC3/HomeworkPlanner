import React, { useState, useRef, useEffect, useMemo} from 'react';
import {Text, View, TextInput, FlatList, Button,
        TouchableOpacity, Alert, Platform, ScrollView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '@react-navigation/native';

import {getStyles, getListStyles, getTouchStyles, getAddStyles} from './stylesheet.js';
import Class from './Class.js'
import {getClassesData , storeClassesData, } from './AsyncStore.js'

const AddAndDellClass = ({navigation}) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  const liststyles = useMemo(() => getListStyles(theme));
  const touchstyles = useMemo(() => getTouchStyles(theme));
  const addstyles = useMemo(() => getAddStyles(theme));

  const debugging = false;
  const delAll = false;
  const [classState, setClassState] = useState([]);
  const [key, setKey] = useState('refresha');
  const [class2Add, setClass2Add] = useState(null);
  const inputRef = useRef();

  useEffect(() => {getClassesData(setClassState)}
          ,[])

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
                                      delClass(classState, userClass, setClassState, key, setKey);
                                    }
                                  },
                                  { text: "No", }
                                ]
                              );
                            }
                            else { // This is because Alert doesnt show on web
                              delClass(classState, userClass, setClassState, key, setKey);
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
                  <Text style={liststyles.emptyListText}>
                    No current classes
                  </Text>
                </View>
              }
            </View>
          </View>

          <View style={addstyles.box}>

              <View style={{flex:3, alignItems:'stretch', justifyContent:'center'}}>
                <TextInput
                      ref={inputRef}
                      style={addstyles.input}
                      placeholder = 'Name of new class to add!'
                      onChangeText={text => { setClass2Add(text) }}
                  />
              </View>

                <TouchableOpacity
                  style={addstyles.touch}
                  onPress={() => {
                    addClass(class2Add, classState, setClassState, inputRef, setClass2Add);
                    }}
                  >
                  <Text style={liststyles.listText} adjustsFontSizeToFit={true}> Add this new class! </Text>
                </TouchableOpacity>

          </View>

          {delAll === true &&
            <Button
              color = 'blue'
              title = 'Delete All Classes'
              onPress={() => {
                if (Platform.OS !== "web") {
                  Alert.alert(
                    "Confirm",
                    "Are you sure you wish to delete all your classes?",
                    [
                      {
                        text: "Yes", onPress: () => {
                          clearClasses(key, setKey, classState, setClassState);
                        }
                      },
                      { text: "No", }
                    ]
                  );
                }
                else { // This is because Alert doesnt show on web
                  clearClasses(key, setKey, classState, setClassState);
                }
               }}
              />
          }

       </View>
      </ScrollView>

   )
}

function addClass(class2Add, classState, setClassState, inputRef, setClass2Add) {
  console.log("class2add: " + class2Add)
   if (class2Add !== null && class2Add !== "") {
     classState.push(new Class(class2Add))
     setClassState(classState);
     inputRef.current.clear();
     setClass2Add(null);
     const userInfo = {userClasses:classState};
     console.log('data='+JSON.stringify(userInfo));
     storeClassesData(userInfo)
   }
}

function delClass(classState, userClass, setClassState, key, setKey) {
  const index = classState.indexOf(userClass.item);
  console.log("Index: " + index);
  console.log("ClassState[i]: " + JSON.stringify(classState[index]));
    if (index >= 0) {
      classState.splice(index, 1);
      setClassState(classState);
      console.log('Splicing')
      console.log("classState: " + JSON.stringify(classState));
      const userInfo = {userClasses:classState};
      console.log('data='+JSON.stringify(userInfo));
      storeClassesData(userInfo)
    }
  if (key === 'refresha') {
    setKey('refreshb');
  } else {
    setKey('refresha');
  }
}

function clearClasses(key, setKey, classState, setClassState) {
  setClassState([]);
  const userInfo = {userClasses:classState};
  console.log('data='+JSON.stringify(userInfo));
  storeClassesData(userInfo)
  if (key === 'refresha') {
    setKey('refreshb');
  } else {
    setKey('refresha');
  }
}


export default AddAndDellClass
