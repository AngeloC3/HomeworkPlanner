import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { styles, textstyles, liststyles, touchstyles} from './stylesheet.js';
import GoBack from './GoBack.js';
import Class from './Class.js'
import {getClassesData , storeClassesData, } from './AsyncStore.js'

const ModifyClassScreen = ({ navigation }) => {
  const [classState, setClassState] = useState([]);
  useEffect(() => {getClassesData(setClassState)}
          ,[])

  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

              <View style={textstyles.title}>
                  <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Choose which class to modify </Text>
              </View>

          <View style={{flex:10}}>
            <View style={liststyles.listBody}>
              {classState != "" ?
                <FlatList
                  data={classState}
                  renderItem={(userClass) => {
                    return (
                      <View style={liststyles.listBox}>
                        <TouchableOpacity
                          style={touchstyles.touch}
                          onPress={() => {
                            const index = classState.indexOf(userClass.item);
                            console.log(index);
                            navigation.navigate('Modify Homework', {userClass: userClass, index: index, tempState: classState})
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


        </View>
      </ScrollView>

  )
}

export default ModifyClassScreen
