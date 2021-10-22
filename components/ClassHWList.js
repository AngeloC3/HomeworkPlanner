import React from 'react';
import {Text, View, SectionList, StyleSheet} from 'react-native';

import {styles, liststyles , skyBlue} from './stylesheet.js';
import {prettyHW} from './Class.js';

const ClassHWList = ({state}) => {

let DATA = [];
for (let i = 0; i < state.length; i++) {
  DATA.push({name: state[i].name, data: state[i].homework})
}

const Item = ({ name }) => (
  <View style={classliststyles.listBox}>
    <Text style={classliststyles.listText}>{prettyHW(name)}</Text>
  </View>
);

  return (

    <View style={styles.container}>

      <View style={{flex:10}}>
        <View style={classliststyles.listBody}>
          {state != "" ?
            <SectionList
               sections={DATA}
               keyExtractor={(item, index) => item + index}
               renderItem={({ item }) => <Item name={item} />}
               renderSectionHeader={({ section: { name } }) => (
                 <View style={classliststyles.titleBox}>
                  <Text style={classliststyles.listTitleText}>{name}</Text>
                 </View>
               )}
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
   )
}

const classliststyles = StyleSheet.create({
  listTitleText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  listText: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
  },
  titleBox: {
    width: '75%',
    flexDirection: 'row',
    margin: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: skyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  listBox: {
    width: '50%',
    flexDirection: 'row',
    margin: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: skyBlue,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  listBody: {
    flex: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ClassHWList
