import React, {useMemo} from "react";
import { ScrollView, View, Text} from 'react-native'
import { getStyles, getTextStyles} from './stylesheet.js';
import {useTheme} from '@react-navigation/native';

const ScreenTemplate = ({title,children, midStyle}) => {
  const theme  = useTheme();
  const styles = useMemo(() => getStyles(theme));
  const textstyles = useMemo(() => getTextStyles(theme));
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={textstyles.title}>
             <Text style={textstyles.titleText} adjustsFontSizeToFit={true} numberOfLines={1}> {title} </Text>
        </View>

        <View style={midStyle}>
          {children}
        </View>


      </View>
    </ScrollView>
  )
}
export default ScreenTemplate
