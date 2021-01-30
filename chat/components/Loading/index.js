import React, { useState, useEffect, useContext } from 'react';
import { Animated, Easing } from 'react-native';
import { ThemeContext } from 'styled-components';

export default function Loading() {
    const themeContext = useContext(ThemeContext);
    const [rotateValue, ] = useState(new Animated.Value(0));

    useEffect(() => {
        StartImageRotate();
    }, []);

    function StartImageRotate() {
        rotateValue.setValue(0);
    
        Animated.loop(
            Animated.timing(rotateValue, {
              toValue: 1,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true
            })
        ).start(() => StartImageRotate());
      }
    
      const RotateData = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      });

      return (
        <Animated.View
            style={{
                height: 30,
                width: 30,
                borderWidth: 3,
                borderColor: themeContext.fontColor,
                borderTopColor: themeContext.mainColor,
                borderRadius: 30,
                marginTop: 50,
                transform: [{ rotate: RotateData }],
            }}
        />
      )
}