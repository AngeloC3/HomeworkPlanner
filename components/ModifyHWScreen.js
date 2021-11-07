import React, {useMemo} from 'react';

import ScreenTemplate from './ScreenTemplate';
import MoH from './ModifyHomework.js';
import {useTheme} from '@react-navigation/native';

const ModifyHWScreen = ({ navigation, route }) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  
  return (

    <ScreenTemplate
        title={"Add or delete homework"}
        midStyle={{}} >
      <MoH route={route}/>
    </ScreenTemplate>

  )
}

export default ModifyHWScreen
