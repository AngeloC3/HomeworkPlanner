/*
import React, {useMemo} from "react";
import {useTheme} from '@react-navigation/native';
const theme  = useTheme();
const styles = useMemo(() => getStyles(theme));
*/

export const AngeMode = {
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
  },
};

export const LightMode = {
  dark: false,
  colors: {
    primary: '#87ceeb',
    lighterPrim: 'lightblue',
    background: 'pink',
    card: '#192734',
    text: 'black',
    textAlt: 'white',
    border: 'black',
    borderColor: 'white',
    notification: 'pink',
  },
};
