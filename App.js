import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import styles, {textstyles , liststyles} from './components/stylesheet.js';
import StackScreens from './components/StackScreens.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StackScreens />
    </View>
  );
}
