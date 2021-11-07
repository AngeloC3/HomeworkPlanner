import React from "react";
import { ScrollView, View, Text} from 'react-native'
import { styles, textstyles} from './stylesheet.js';
const ScreenTemplate = ({title,children, midStyle}) => {
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
