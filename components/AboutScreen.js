import * as React from 'react';
import { View, } from 'react-native';

import {liststyles, styles} from './stylesheet.js';
import Lists from './ListsAbout.js';
import ScreenTemplate from './ScreenTemplate';

const Item = ({ title }) => (
  <View style={liststyles.listBox}>
    <Text style={liststyles.listText}> {title} </Text>
  </View>
);

const AboutScreen = ({ navigation }) => {
  return (

      <ScreenTemplate
          title={"About"}
          midStyle={styles.middleBody} >
        <View style={liststyles.listBody}>
          <View style={liststyles.listBody}>
            <Lists />
          </View>
        </View>
      </ScreenTemplate>

  )
}

export default AboutScreen
