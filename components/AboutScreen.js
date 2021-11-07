import React, {useMemo} from 'react';
import { View, } from 'react-native';

import {getListStyles, getStyles} from './stylesheet.js';
import Lists from './ListsAbout.js';
import ScreenTemplate from './ScreenTemplate';
import {useTheme} from '@react-navigation/native';

const AboutScreen = ({ navigation }) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  const liststyles = useMemo(() => getListStyles(theme));

  const Item = ({ title }) => (
    <View style={liststyles.listBox}>
      <Text style={liststyles.listText}> {title} </Text>
    </View>
  );

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
