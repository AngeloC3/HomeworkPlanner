import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles, { touchstyles , liststyles , } from './stylesheet.js';

const GoBack = ({navigation}) => {

  return (
    <View style={liststyles.listBox}>
      <TouchableOpacity
        style={touchstyles.touch}
        onPress={() => {
          navigation.goBack();
          }}
        >
        <Text style={liststyles.listText}> {"<--"} </Text>
      </TouchableOpacity>
    </View>
   )
}

export default GoBack
