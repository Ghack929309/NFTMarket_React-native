import React from 'react';
import {Text, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/core'

 const FocusStatusBar = (props) => {
    const isFocused = useIsFocused()
    return isFocused ? (<StatusBar animated={true} {...props} /> ): (<Text>Not focus</Text>)
}

export default FocusStatusBar;
