import React, {useState, useEffect, useRef} from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity, Button,
          TextInput, StyleSheet, Platform, Alert } from 'react-native';

import { styles, textstyles, liststyles, touchstyles, addstyles, skyBlue} from './stylesheet.js';
import GoBack from './GoBack.js';
import Class , { prettyHW } from './Class.js';
import { storeClassesData, } from './AsyncStore.js'

const ModifyClassScreen = ({ route, navigation }) => {
  const debugging = false;
  const delAll = true;
  const { userClass } = route.params;
  const { index } = route.params;
  const { tempState } = route.params;
  const [classState, setClassState] = useState(tempState);
  const [chosenClass, setChosenClass] = useState(new Class(userClass.item.name, userClass.item.homework));
  const [key, setKey] = useState('refresha');
  const inputRef = useRef();
  const inputRef2 = useRef();
  const [hw2Add, setHW2Add] = useState(null);
  const [date2Add, setDate2Add] = useState(null);

  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          {debugging === true &&
            <View>
              <Button
                color = 'blue'
                title = '=?'
                onPress={() => {
                    console.log("tempState: " + JSON.stringify(tempState));
                    console.log("chosenClass: " + JSON.stringify(chosenClass));
                    console.log("homework: " + JSON.stringify(chosenClass.homework));
                    console.log(chosenClass.homework == "")
                    console.log("isClass? " + (chosenClass instanceof Class));
                    console.log("userClass: " + JSON.stringify(userClass));
                    console.log("userClass.item: " + JSON.stringify(userClass.item));
                 }}
                />
            </View>
          }

              <View style={textstyles.title}>
                  <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Add or delete homework </Text>
              </View>

          <View style={{flex:10}}>
            <View style={liststyles.listBody}>
              {chosenClass.homework != "" ?
                <FlatList
                  data={chosenClass.homework}
                  key={key}
                  renderItem={(homework) => {
                    return (
                      <View style={liststyles.listBox}>
                        <TouchableOpacity
                          style={touchstyles.touch}
                          onPress={() => {
                            if (Platform.OS !== "web") {
                              Alert.alert(
                                "Confirm",
                                "Are you sure you wish to delete " + {homework} + "?",
                                [
                                  {
                                    text: "Yes", onPress: () => {
                                      let hwIndex = chosenClass.homework.indexOf(homework.item);
                                      delHomework(chosenClass, setChosenClass, hwIndex, key, setKey, classState, setClassState, index);
                                    }
                                  },
                                  { text: "No", }
                                ]
                              );
                            }
                            else { // This is because Alert doesnt show on web
                              let hwIndex = chosenClass.homework.indexOf(homework.item);
                              delHomework(chosenClass, setChosenClass, hwIndex, key, setKey, classState, setClassState, index);
                            }
                            }}
                          >
                          <Text style={liststyles.listText}>
                            {prettyHW(homework.item)}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                  keyExtractor={(homework) => JSON.stringify(homework)}
                />
              : <View style={liststyles.listBox}>
                  <Text style={liststyles.emptyListText}>
                    No current homework for {chosenClass.name}
                  </Text>
                </View>
              }
            </View>
          </View>

        <View style={hwstyles.box}>

            <View style={{flex:3}}>
              <View style={{flex:3, alignItems:'stretch', justifyContent:'center'}}>
                <TextInput
                      ref={inputRef}
                      style={addstyles.input}
                      placeholder = 'Homework to add!'
                      onChangeText={text => { setHW2Add(text) }}
                  />
              </View>
              <View style={{flex:3, alignItems:'stretch', justifyContent:'center'}}>
                <TextInput
                      ref={inputRef2}
                      style={addstyles.input}
                      placeholder = 'Due date (blank for none)'
                      onChangeText={text => { setDate2Add(text) }}
                  />
              </View>
            </View>

              <TouchableOpacity
                style={addstyles.touch}
                onPress={() => {
                  addHomework(chosenClass, setChosenClass, hw2Add, date2Add, inputRef, inputRef2,
                                        setHW2Add, setDate2Add, classState, setClassState, index);
                  }}
                >
                <Text style={liststyles.listText} adjustsFontSizeToFit={true}> Add this new class! </Text>
              </TouchableOpacity>

        </View>

        {delAll === true &&
          <Button
            color = 'blue'
            title = 'Delete All Homework'
            onPress={() => {
              if (Platform.OS !== "web") {
                Alert.alert(
                  "Confirm",
                  "Are you sure you wish to delete all homework for this class?",
                  [
                    {
                      text: "Yes", onPress: () => {
                        clrHomework(chosenClass, setChosenClass, key, setKey, classState, setClassState, index);
                      }
                    },
                    { text: "No", }
                  ]
                );
              }
              else { // This is because Alert doesnt show on web
                clrHomework(chosenClass, setChosenClass, key, setKey, classState, setClassState, index);
              }
             }}
            />
        }

        </View>
      </ScrollView>

  )
}

function addHomework(chosenClass, setChosenClass, hw2Add, date2Add, inputRef, inputRef2,
                      setHW2Add, setDate2Add, classState, setClassState, index) {
   if (hw2Add !== null && hw2Add !== "") {
     chosenClass.addHomework(hw2Add,date2Add)
     console.log('b4: ' + JSON.stringify(classState));
     classState.splice(index, 1, chosenClass);
     console.log('Af: ' + JSON.stringify(classState));
     inputRef.current.clear();
     inputRef2.current.clear();
     setHW2Add(null);
     setDate2Add(null);
     setChosenClass(chosenClass);
     setClassState(classState);
     const userInfo = {userClasses:classState};
     console.log('data='+JSON.stringify(userInfo));
     storeClassesData(userInfo)
   }
}

function delHomework(chosenClass, setChosenClass, hwIndex, key, setKey, classState, setClassState, index) {
  console.log(hwIndex);
  chosenClass.delHomework(hwIndex)
  classState.splice(index, 1, chosenClass);
  setChosenClass(chosenClass);
  setClassState(classState);
  const userInfo = {userClasses:classState};
  console.log('data='+JSON.stringify(userInfo));
  storeClassesData(userInfo)
  if (key === 'refresha') {
    setKey('refreshb');
  } else {
    setKey('refresha');
  }
}

function clrHomework(chosenClass, setChosenClass, key, setKey, classState, setClassState, index) {
  chosenClass.clearHomework();
  classState.splice(index, 1, chosenClass);
  setChosenClass(chosenClass);
  setClassState(classState);
  const userInfo = {userClasses:classState};
  console.log('data='+JSON.stringify(userInfo));
  storeClassesData(userInfo)
  if (key === 'refresha') {
    setKey('refreshb');
  } else {
    setKey('refresha');
  }
}

const hwstyles = StyleSheet.create({
  box: {
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
});

export default ModifyClassScreen
