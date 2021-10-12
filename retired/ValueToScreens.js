import React, { useState, useEffect } from "react";
import ValueProvider from './ValueProvider.js';
import StackScreens from './StackScreens.js'
import Class from './Class.js'
import {getClassesData , storeClassesData} from './AsyncStore.js'

const ValueToScreen = () => {
  const dataFilled = {userClasses: [new Class('COSI153A'), new Class('COSI21A'), new Class('COSI29A'),] };
  const dataEmpty = {userClasses:  []};
  const [classState, setClassState] = useState(null);
  const dataNormal = {userClasses: classState};


  // useEffect(() => {getClassesData({userClasses})}
  //         ,[])
  useEffect(() => {getClassesDataSameFileTest()}
          ,[])

  const getClassesDataSameFileTest = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@user_info')
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

  return (
    <ValueProvider value={classState}>
        <StackScreens />
    </ValueProvider>
  )
}

export default ValueToScreen
