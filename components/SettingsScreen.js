import * as React from 'react';
import { useState , } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView} from 'react-native';

import styles, { textstyles , liststyles} from './stylesheet.js';
import NavButtons from './NavigationButtons.js';

const SettingsScreen = ({ navigation }) => {
  const [firstName,setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (

    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        <View style={textstyles.title}>
            <Text style={textstyles.titleText} adjustsFontSizeToFit={true}> Settings </Text>
        </View>

        <View style={styles.middleBody}>
            <TextInput
              style = {styles.input}
              placeholder = 'First Name'
              onChangeText={text => {setFirstName(text)}}
            />
            <TextInput
              style = {styles.input}
              placeholder = 'Last Name'
              onChangeText={text => {setLastName(text)}}
            />
            <Text style={liststyles.listTitleText} adjustsFontSizeToFit={true} numberOfLines={1}>
              Hello {firstName} {lastName}!
            </Text>
        </View>

        <View style={{flex:.5, justifyContent: 'center', alignItems:'center',}}>
          <Text style={{flex:.5, color:'white',}}>
              Settings to allow usage customization has not yet been implemented
          </Text>
        </View>

        <NavButtons navigation={navigation} />

      </View>
    </ScrollView>

  )
}

export default SettingsScreen
