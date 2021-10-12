import * as React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text} from 'react-native';

import styles, { skyBlue } from '../components/stylesheet.js';

const NavigationButtons = ({ navigation }) => {
  return (

      <View style={buttonstyles.buttons}>
        <View style={buttonstyles.indi}>
          <TouchableOpacity
            style={buttonstyles.touch}
            onPress={() =>
              navigation.navigate('Home')}
            >
            <Text style={buttonstyles.listText} adjustsFontSizeToFit={true} numberOfLines={1}> Home </Text>
          </TouchableOpacity>
        </View>
        <View style={buttonstyles.indi}>
          <TouchableOpacity
            style={buttonstyles.touch}
            onPress={() =>
              navigation.navigate('Class Management')}
            >
              <Text style={buttonstyles.listText}> Class </Text>
              <Text style={buttonstyles.listText}> Management </Text>
          </TouchableOpacity>
        </View>
        <View style={buttonstyles.indi}>
          <TouchableOpacity
            style={buttonstyles.touch}
            onPress={() =>
              navigation.navigate('About')}
            >
            <Text style={buttonstyles.listText}> About </Text>
          </TouchableOpacity>
        </View>
        <View style={buttonstyles.indi}>
          <TouchableOpacity
            style={buttonstyles.touch}
            onPress={() =>
              navigation.navigate('Settings')}
            >
            <Text style={buttonstyles.listText}> Settings </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const buttonstyles = StyleSheet.create({
  listText: {
    color: "black",
    textAlign: "center",
    fontSize: 10,
    fontWeight: 'bold'
  },
  buttons: {
    flex: .5,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: skyBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indi: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  touch: {
    height:'100%',
    width:'100%',
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default NavigationButtons
