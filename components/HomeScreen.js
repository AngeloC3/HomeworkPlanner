import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles, {textstyles} from './stylesheet.js';
import NavButtons from './NavigationButtons.js';

const HomeScreen = ({ navigation }) => {
  return (

    <View style={styles.container}>

      <View style={textstyles.title}>
          <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Homework Planner </Text>
      </View>

      <View style={styles.middleBody}>
        <Image style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
          source={require('../assets/HWPlannerImage.jpg')} />
      </View>

      <NavButtons navigation={navigation} />

    </View>

  )
}

export default HomeScreen
