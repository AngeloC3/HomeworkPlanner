import * as React from 'react';

import ScreenTemplate from './ScreenTemplate';
import MoH from './ModifyHomework.js';

const ModifyHWScreen = ({ navigation, route }) => {
  return (

    <ScreenTemplate
        title={"Add or delete homework"}
        midStyle={{}} >
      <MoH route={route}/>
    </ScreenTemplate>

  )
}

export default ModifyHWScreen
