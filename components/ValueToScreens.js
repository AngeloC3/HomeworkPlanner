import React, { useState, useEffect } from "react";
import ValueProvider from './ValueProvider.js';
import TabScreens from './TabScreens.js'

const ValueToScreen = () => {
  const [bgcolor, setbgcolor] = useState("#444444");

  return (
    <ValueProvider value={bgcolor}>
        <TabScreens />
    </ValueProvider>
  )
}

export default ValueToScreen
