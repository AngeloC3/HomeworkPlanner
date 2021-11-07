import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';

import ScreenTemplate from './ScreenTemplate';
import {getStyles} from './stylesheet.js';
import AdDC from './AddAndDellClass.js';

const HomeScreen = ({ navigation }) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  
  return (

    <ScreenTemplate
        title={"Your Classes"}
        midStyle={styles.midAlt} >
      <AdDC />
    </ScreenTemplate>

  )
}

export default HomeScreen
