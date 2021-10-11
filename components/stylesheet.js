import * as React from 'react';
import { StyleSheet, } from 'react-native';

export const darkModeColor = '#444444';
export const skyBlue = "#87CEEB";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkModeColor,
    alignItems: 'stretch',
  },
  middleBody: {
    flex: 5,
    justifyContent:'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 3,
    padding: 10,
    backgroundColor: skyBlue,
  },
});

export const textstyles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: skyBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: "black",
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
  },
});

export const liststyles = StyleSheet.create({
  listBox: {
    flex: 1,
    flexDirection: 'column',
    margin: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: skyBlue,
  },
  listText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
  listTitleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  listBody: {
    flex: 5,
    alignItems: 'stretch',
    flexDirection: 'row',
  },
});

export const listwrap = StyleSheet.create({
  middleBody: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  innerList: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
});

export default styles
