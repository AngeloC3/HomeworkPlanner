import React, { useState } from "react";
import ValueProvider from './ValueProvider.js';
import StackScreens from './StackScreens.js'
import Class from './Class.js'
import {getClassesData , storeClassesData} from './AsyncStore.js'

const ValueToScreen = () => {
  const dataFilled = {userClasses: [new Class('COSI153A'), new Class('COSI21A'), new Class('COSI29A'),] };
  const dataEmpty = {userClasses:  []};

  return (
    <ValueProvider value={dataFilled}>
        <StackScreens />
    </ValueProvider>
  )
}

export default ValueToScreen
