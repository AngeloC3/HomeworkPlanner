import * as React from 'react';

import ScreenTemplate from './ScreenTemplate';
import {styles} from './stylesheet.js';
import AdDC from './AddAndDellClass.js';

const HomeScreen = ({ navigation }) => {
  return (

    <ScreenTemplate
        title={"Your Classes"}
        midStyle={styles.midAlt} >
      <AdDC />
    </ScreenTemplate>

  )
}

export default HomeScreen
