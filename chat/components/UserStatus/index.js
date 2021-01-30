import React, { useRef, useEffect, useContext } from 'react';
import { Animated, Easing } from 'react-native';
import { ThemeContext } from 'styled-components';

export default function FadeInView (props) {
  const themeContext = useContext(ThemeContext);
  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 1000,
        delay: 3000,
        easing: Easing.back(),
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.Text 
      style={{
        textAlign: "center",
        padding: 10,
        backgroundColor: themeContext.secondaryColor,
        color: themeContext.fontColor,
        marginTop: 50,
        borderRadius: 5,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.Text>
  );
}