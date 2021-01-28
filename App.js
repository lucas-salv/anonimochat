import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Chat from './screens/Chat';
import { darkTheme, lightTheme } from './utils/themes';

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme} >
        <StatusBar style="inverted" />
        <Chat theme={isLightTheme} setTheme={setIsLightTheme}/>
      </ThemeProvider>
    </>
  );
}
