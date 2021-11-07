import React, {useMemo} from "react";
import { Image, } from 'react-native';
import {Theme, useTheme} from '@react-navigation/native';

import ScreenTemplate from './ScreenTemplate';
import {getStyles} from './stylesheet.js';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme));
  return (

    <ScreenTemplate
        title={"Homework Planner"}
        midStyle={styles.middleBody} >
      <Image style={{width: '95%', height: '95%', resizeMode: 'stretch'}}
        source={require('../assets/HWPlannerImage.jpg')} />
    </ScreenTemplate>

  )
}

export default HomeScreen
