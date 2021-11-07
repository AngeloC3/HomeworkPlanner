import * as React from 'react';
import { Text, View,ScrollView, Button, StyleSheet, TouchableOpacity,} from 'react-native';

import {styles, textstyles , skyBlue, touchstyles } from './stylesheet.js';
import ScreenTemplate from './ScreenTemplate';

const ClassManagementScreen = ({ navigation }) => {

  return (

       <ScreenTemplate
          title={"Class Management"}
          midStyle={styles.middleBody} >
        <View style={managestyles.box}>

          <View style={{}}>
            <View style={managestyles.indi}>
              <TouchableOpacity
                style={touchstyles.touch}
                onPress={() =>
                  navigation.navigate('View Classes')}
                >
                <Text style={textstyles.titleText}> View Classes </Text>
              </TouchableOpacity>
            </View>
          </View>

            <View style={{flex:1}}>
              <View style={managestyles.indi}>
                <TouchableOpacity
                  style={touchstyles.touch}
                  onPress={() =>
                    navigation.navigate('Add/Delete Class')}
                  >
                  <Text style={textstyles.titleText}> Add and Delete Classes </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex:1}}>
              <View style={managestyles.indi}>
                <TouchableOpacity
                  style={touchstyles.touch}
                  onPress={() =>
                    navigation.navigate('Modify Classes')}
                  >
                  <Text style={textstyles.titleText} adjustsFontSizeToFit={true}>
                    Modify Classes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

        </View>
      </ScreenTemplate>
  )
}

const managestyles = StyleSheet.create({
  box: {
    flex: 7,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: skyBlue,
    alignSelf: 'stretch',
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
