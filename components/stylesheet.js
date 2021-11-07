import * as React from 'react';
import { StyleSheet, } from 'react-native';

export const darkModeColor = '#444444';
export const skyBlue = "#87CEEB";
const lightblue = 'lightblue'

export const getStyles = theme => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
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
    backgroundColor: theme.colors.primary,
  },
  midAlt: {
    flex:6
  },
});

export const getTextStyles = theme => StyleSheet.create({
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
    alignItems: 'center',
  },
  titleText: {
    color: theme.colors.text,
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
  },
});

export const getListStyles = theme => StyleSheet.create({
  listBox: {
    flex: 1,
    flexDirection: 'column',
    margin: 7,
    padding: 7,
    borderWidth: 2,
    borderColor: theme.colors.borderColor,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  listText: {
    color: theme.colors.text,
    textAlign: "center",
    fontSize: 20,
  },
  listTitleText: {
    color: theme.colors.textAlt,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
  },
  listBody: {
    flex: 5,
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  emptyListText: {
    alignSelf:'center',
    justifyContent:'center',
    fontSize:50,
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

export const getTouchStyles = theme => StyleSheet.create({
  touch: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
    backgroundColor: theme.colors.lighterPrim,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const getAddStyles = theme => StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderWidth: 4,
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  indi: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 3,
    padding: 10,
    backgroundColor: theme.colors.lighterPrim,
  },
  touch: {
    flex: 1,
    flexDirection: 'column',
    margin: 2,
    padding: 2,
    borderWidth: 4,
    borderColor: theme.colors.borderColor,
    borderRadius: 10,
    backgroundColor: theme.colors.lighterPrim,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});
