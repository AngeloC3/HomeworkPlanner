import * as React from 'react';
import { StyleSheet, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
});

export const textstyle = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "#87CEEB",
  },
  titleText: {
    color: "black",
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
  },
})

export default styles
