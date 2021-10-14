import React, { useState, useEffect,} from 'react';
import {Text, View, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// The get and save data functions are from
// https://github.com/tjhickey724/cs153aFall21/blob/main/components/Profile.js

export const getClassesData = async (setClassState) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_classes')
    let data = null
    if (jsonValue!=null) {
      data = JSON.parse(jsonValue)
      setClassState(data.userClasses)
      console.log('just set userClasses: ' + JSON.stringify(data.userClasses))
    } else {
      console.log('just read a null value from Storage')
    }


  } catch(e) {
    console.log("error in getData ")
    console.dir(e)
    // error reading value
  }
}

export const storeClassesData = async (value) => {
      try {
      const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@user_classes', jsonValue)
        console.log('just stored '+jsonValue)
      } catch (e) {
        console.log("error in storeData ")
        console.dir(e)
        // saving error
    }
}

export const clearAll = async () => {
        try {
          console.log('Clearing data')
          await AsyncStorage.clear()
          console.log('Cleared data')
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }
