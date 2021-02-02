import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Chat from './screens/Chat';
import { darkTheme, lightTheme } from './utils/themes';

const Stack = createStackNavigator();

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme} >
        <StatusBar style="inverted" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{
                                            headerShown: false
                                          }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Chat">
                {props => <Chat {...props} theme={isLightTheme} setTheme={setIsLightTheme} />}
              </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
  );
}
