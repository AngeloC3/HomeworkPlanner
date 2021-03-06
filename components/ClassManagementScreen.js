import React, {useMemo} from "react";
import { Text, View,ScrollView, Button, StyleSheet, TouchableOpacity,} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {getStyles, getTextStyles, getTouchStyles } from './stylesheet.js';
import ScreenTemplate from './ScreenTemplate';

const ClassManagementScreen = ({ navigation }) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  const textstyles = useMemo(() => getTextStyles(theme));
  const touchstyles = useMemo(() => getTouchStyles(theme));
  const managestyles = useMemo(() => getManageStyles(theme));

  return (

       <ScreenTemplate
          title={"Class Management"}
          midStyle={styles.middleBody} >
        <View style={managestyles.box}>

          <View style={{}}>
            <View style={managestyles.indi}>
              <TouchableOpacity
                style={touchstyles.touch}
                onPress={() =>
                  navigation.navigate('View Classes')}
                >
                <Text style={textstyles.titleText}> View Classes </Text>
              </TouchableOpacity>
            </View>
          </View>

            <View style={{flex:1}}>
              <View style={managestyles.indi}>
                <TouchableOpacity
                  style={touchstyles.touch}
                  onPress={() =>
                    navigation.navigate('Add/Delete Class')}
                  >
                  <Text style={textstyles.titleText}> Add and Delete Classes </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex:1}}>
              <View style={managestyles.indi}>
                <TouchableOpacity
                  style={touchstyles.touch}
                  onPress={() =>
                    navigation.navigate('Modify Classes')}
                  >
                  <Text style={textstyles.titleText} adjustsFontSizeToFit={true}>
                    Modify Classes
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

        </View>
      </ScreenTemplate>
  )
}

const getManageStyles = theme => StyleSheet.create({
  box: {
    flex: 7,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  indi: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
  },
});

export default ClassManagementScreen
