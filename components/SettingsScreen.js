import React, {useMemo} from 'react';
import { useState , } from 'react';
import { Text, View, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import {useTheme} from '@react-navigation/native';

import {getStyles } from './stylesheet.js';
import ScreenTemplate from './ScreenTemplate';
import {AngeMode, LightMode} from './Themes.js';

const SettingsScreen = ({ navigation }) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));

  return (

       <ScreenTemplate
          title={"Settings"}
          midStyle={styles.middleBody} >
         <Settings />
      </ScreenTemplate>

  )
}

const Settings = ({}) => {
  const [firstName,setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const theme  = useTheme();
  const [themeChanger, setThemeChanger] = useState("#444444");

  return(
    <View>

      <Button
        //onPress={}
        title="Change Theme"
        color="#841584"
      />

      <Picker
          selectedValue={themeChanger}
          onValueChange={(itemValue, itemIndex) =>
            setThemeChanger(itemValue)
          }>
          <Picker.Item label="Dark Mode" value="#444444" />
          <Picker.Item label="Light Mode" value="#fafafa" />
      </Picker>

    </View>
  )}

export default SettingsScreen
