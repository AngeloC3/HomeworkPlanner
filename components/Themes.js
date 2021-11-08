/*
import React, {useMemo} from "react";
import {useTheme} from '@react-navigation/native';
const theme  = useTheme();
const styles = useMemo(() => getStyles(theme));
*/

import { DefaultTheme } from '@react-navigation/native';

export const AngeMode = {
  name: 'Ange Mode',
  dark: false,
  colors: {
    primary: '#87ceeb',
    lighterPrim: 'lightblue',
    background: '#444444',
    card: 'lightblue',
    text: 'black',
    textAlt: 'white',
    border: 'black',
    borderColor: 'black',
    notification: '#87ceeb',
    tabActive: 'blue',
  },
};

export const LightMode = {
  name: 'Light Mode',
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'skyblue',
    lighterPrim: '#f0ede6',
    tabActive: 'blue'
  },
};

export const DarkMode = {
  name: 'Dark Mode',
  dark: true,
  colors: {
    primary: '#333333',
    lighterPrim: '#444444',
    background: '#121212',
    card: '#444444',
    text: '#FFFFF7',
    textAlt: '#FFFFF7',
    border: '#FFFFF7',
    borderColor: '#FFFFF7',
    notification: '#444444',
    tabActive: 'blue',
  },
};

export const PinkMode = {
  name: 'Pink Mode',
  dark: false,
  colors: {
    primary: 'lightpink',
    lighterPrim: 'pink',
    background: 'hotpink',
    card: 'pink',
    text: 'black',
    textAlt: 'black',
    border: 'black',
    borderColor: 'white',
    notification: 'pink',
    tabActive: 'white',
  },
};
