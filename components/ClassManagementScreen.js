import * as React from 'react';
import { Text, View,ScrollView, Button, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import styles, { textstyles , skyBlue, touchstyles } from './stylesheet.js';
import SafeViewAndroid from "./SafeViewAndroid";

const ClassManagementScreen = ({ navigation }) => {

  return (

    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
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
                  >
                  <Text style={textstyles.titleText} adjustsFontSizeToFit={true}>
                    Modify Class (not yet implemented)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

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
