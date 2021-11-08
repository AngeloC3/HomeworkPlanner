import React, {useMemo, useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import {useTheme, } from '@react-navigation/native';
import {useValue} from './ValueProvider.js';

import {getStyles, getTextStyles, getListStyles } from './stylesheet.js';
import ScreenTemplate from './ScreenTemplate';
import {AngeMode, LightMode, DarkMode, PinkMode} from './Themes.js';
import {storeSettings} from './AsyncStore.js';

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
  const {currentValue, setCurrentValue} = useValue();
  const theme = currentValue;
  const setTheme = setCurrentValue;
  const settingsstyles = useMemo(() => getSettingsStyles(theme));
  const textstyles = useMemo(() => getTextStyles(theme));
  const liststyles = useMemo(() => getListStyles(theme));
  const [willStore, setWillStore] = useState(true);

  useEffect(() => {
    const userInfo = {userTheme:theme};
    storeSettings(userInfo);
  }
          ,[theme])

  return(
    <View style={settingsstyles.title}>

    <View style={{flex:1}}>
        <Text style={textstyles.titleText}> Choose your theme! </Text>
        <Text style={liststyles.listText}> Current: {theme.name} </Text>
       <Picker
            //selectedValue={"Hello"}
            style={{color:theme.colors.text, backgroundColor: theme.colors.lighterPrim, height:'50%'}}
            onValueChange={(value) =>{
                if (value === 'N/A') {
                  setWillStore(false);
                }
                else if (value === "AM") {
                  setTheme(AngeMode);
                }
                else if (value === "LM") {
                  setTheme(LightMode);
                }
                else if (value === "DM") {
                  setTheme(DarkMode);
                }
                else if (value === "PM") {
                  setTheme(PinkMode);
                }
              }}>
            <Picker.Item label="Themes" value={'N/A'} />
            <Picker.Item label="Ange Mode" value={'AM'} />
            <Picker.Item label="Light Mode" value={'LM'} />
            <Picker.Item label="Dark Mode" value={'DM'} />
            <Picker.Item label="Pink Mode" value={'PM'} />
        </Picker>
      </View>

    </View>
  )}

export default SettingsScreen

export const getSettingsStyles = theme => StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
