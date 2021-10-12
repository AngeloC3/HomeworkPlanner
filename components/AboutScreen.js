import * as React from 'react';
import { Text, View, Button, SectionList, ScrollView} from 'react-native';

import styles, {textstyles , liststyles} from './stylesheet.js';
import NavButtons from './NavigationButtons.js';
import Lists from './ListsAbout.js';

const bullets = [
  {
    title: 'About this app',
    data: ['This app was made by Angelo Cataldo',
            'This app was started on September 24th, 2021',
            'This app has not yet been completed',
          ]
  },
  {
    title: 'To be implemented',
    data: ['Adding classes',
            'Moifying homework data for those classes',
            'Viewing your homework on a calender',
            'Viewing your homework in a class by class screen',
            'Add settings to further customize the experience'
          ]
  },
];

const Item = ({ title }) => (
  <View style={liststyles.listBox}>
    <Text style={liststyles.listText}> {title} </Text>
  </View>
);

const AboutScreen = ({ navigation }) => {
  return (

    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={textstyles.title}>
            <Text style={textstyles.titleText}
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  >
              About Homework Planner
            </Text>
        </View>

        <View style={liststyles.listBody}>
          <View style={liststyles.listBody}>
            <Lists />
          </View>
        </View>

        <NavButtons navigation={navigation} />

      </View>
    </ScrollView>

  )
}

export default AboutScreen
