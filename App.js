import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import styles from './components/stylesheet.js';
import HomeScreen from './components/HomeScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}
