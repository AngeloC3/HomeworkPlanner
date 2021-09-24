import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import styles, {textstyle} from '../components/stylesheet.js';

const HomeScreen = () => {
  return (

    <View style={homestyles.container}>
      <View style={textstyle.title}>
          <Text style={textstyle.titleText}> Homework Planner </Text>
          <Text style={{color:'black',
                        textAlign:'center',
                        fontSize: 15,
                      }}> Made by Angelo Cataldo </Text>

      </View>

      <View style={{flex: 5, justifyContent:'center', alignItems: 'center',}}>
        <Image style={{width: '50%', height: '50%', resizeMode: 'stretch'}}
          source={require('../assets/HWPlannerImage.jpg')} />
      </View>

    </View>

  )
}

const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
});

export default HomeScreen
