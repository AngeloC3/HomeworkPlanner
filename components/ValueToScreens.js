import React, { } from "react";
import ValueProvider from './ValueProvider.js';
import TabScreens from './TabScreens.js'
import {AngeMode, } from './Themes.js';

const ValueToScreen = () => {
  let theme = AngeMode;

  return (
    <ValueProvider value={theme}>
        <TabScreens />
    </ValueProvider>
  )
}

export default ValueToScreen
