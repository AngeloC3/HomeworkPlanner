import * as React from 'react';
import { Text, View, Image, ScrollView, } from 'react-native';

import styles, {textstyles} from './stylesheet.js';
import SafeViewAndroid from "./SafeViewAndroid";

const HomeScreen = ({ navigation }) => {
  return (

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

          <View style={textstyles.title}>
              <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Homework Planner </Text>
          </View>

          <View style={styles.middleBody}>
            <Image style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
              source={require('../assets/HWPlannerImage.jpg')} />
          </View>


        </View>
      </ScrollView>

  )
}

export default HomeScreen
