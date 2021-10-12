import * as React from 'react';
import { useState , } from 'react';
import { Text, View,ScrollView, Button, StyleSheet, TouchableOpacity} from 'react-native';

import styles, { textstyles , skyBlue, touchstyles } from './stylesheet.js';
import NavButtons from './NavigationButtons.js';
import AddClassUE from  './AddClassUE.js';

const ClassManagementScreen = ({ navigation }) => {

  return (

    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={textstyles.title}>
            <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Class Management </Text>
        </View>

        <View style={managestyles.box}>

          <View style={{flex:1}}>
            <View style={managestyles.indi}>
              <TouchableOpacity
                style={touchstyles.touch}
                onPress={() =>
                  navigation.navigate('Add Class')}
                >
                <Text style={textstyles.titleText}> Add Class </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex:1}}>
            <View style={managestyles.indi}>
              <TouchableOpacity
                style={touchstyles.touch}
                >
                <Text style={textstyles.titleText}> Modify Class (not yet implemented) </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex:1}}>
            <View style={managestyles.indi}>
              <TouchableOpacity
                style={touchstyles.touch}
                onPress={() =>
                  navigation.navigate('Delete Class')}
                >
                <Text style={textstyles.titleText}> Delete Class </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={{flex:2}}>
          <NavButtons navigation={navigation} />
        </View>

      </View>
    </ScrollView>

  )
}

const managestyles = StyleSheet.create({
  box: {
    flex: 7,
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
    justifyContent: 'space-evenly',
    borderColor: "black",
    borderRadius: 10,
  },
});

export default ClassManagementScreen
