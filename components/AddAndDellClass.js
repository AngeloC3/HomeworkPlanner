import React, { useState, useRef , useEffect} from 'react';
import {Text, View, TextInput, FlatList, Button,
        TouchableOpacity, Alert, Platform, ScrollView, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {styles, textstyles , liststyles , skyBlue, touchstyles} from './stylesheet.js';
import Class from './Class.js'
import {getClassesData , storeClassesData, } from './AsyncStore.js'
import GoBack from './GoBack.js';

const AddAndDellClass = ({navigation}) => {
  let debugging = false;
  const [classState, setClassState] = useState([]);
  const [key, setKey] = useState('refresha');
  let isSure = true;
  const [class2Add, setClass2Add] = useState(null);
  const [addedNull, setAddedNull] = useState(false);
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
                    addClass(class2Add, classState, setClassState, inputRef, setClass2Add, setAddedNull);
                    }}
                  >
                  <Text style={liststyles.listText} adjustsFontSizeToFit={true}> Add this new class! </Text>
                </TouchableOpacity>

          </View>

       </View>
      </ScrollView>

   )
}

function addClass(class2Add, classState, setClassState, inputRef, setClass2Add, setAddedNull) {
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
}

function delClass(classState, userClass, setClassState, key, setKey) {
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

const addstyles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: skyBlue,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  indi: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderColor: "black",
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 3,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  touch: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    padding: 2,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

export default AddAndDellClass
