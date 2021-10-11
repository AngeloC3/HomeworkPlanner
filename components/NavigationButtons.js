import * as React from 'react';
import { StyleSheet, View, Button, } from 'react-native';

import styles, { skyBlue } from '../components/stylesheet.js';

const NavigationButtons = ({ navigation }) => {
  return (

      <View style={buttonstyles.buttons}>
        <View style={buttonstyles.indi}>
          <Button
            title = 'Home'
            color = 'blue'
            onPress={() =>
              navigation.navigate('Home')}
          />
        </View>
        <View style={buttonstyles.indi}>
          <Button
            title = 'Class Management'
            color = 'blue'
            onPress={() =>
              navigation.navigate('Class Management')}
          />
        </View>
        <View style={buttonstyles.indi}>
          <Button
            title = 'About this app'
            color = 'blue'
            onPress={() =>
              navigation.navigate('About')}
          />
        </View>
        <View style={buttonstyles.indi}>
          <Button
            title = 'Settings'
            color = 'blue'
            onPress={() =>
              navigation.navigate('Settings')}
          />
        </View>
      </View>
  )
}

const buttonstyles = StyleSheet.create({
  buttonsOutside: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: skyBlue,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  indi: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default NavigationButtons
