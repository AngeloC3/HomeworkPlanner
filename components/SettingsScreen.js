import * as React from 'react';
import { useState , } from 'react';
import { Text, TextInput, View } from 'react-native';
import {Picker} from '@react-native-picker/picker'

import {styles , liststyles} from './stylesheet.js';
import ScreenTemplate from './ScreenTemplate';

const SettingsScreen = ({ navigation }) => {

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
  const [theme, setTheme] = useState("#444444");

  return(
    <View>
      <Picker
          selectedValue={theme}
          onValueChange={(itemValue, itemIndex) =>
            setTheme(itemValue)
          }>
          <Picker.Item label="Dark Mode" value="#444444" />
          <Picker.Item label="Light Mode" value="#fafafa" />
      </Picker>
    </View>
  )}

export default SettingsScreen
