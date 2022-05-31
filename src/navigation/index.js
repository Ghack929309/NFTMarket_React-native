import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {useFonts} from "expo-font";
import Home from "../screen/Home";
import Details from "../screen/Details";

const Stack = createStackNavigator()
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
}

const NavigationStack = () => {
    const [loaded]=useFonts({
        InterBold:require('../../assets/font/Inter-Bold.ttf'),
        InterSemiBold:require('../../assets/font/Inter-SemiBold.ttf'),
        InterMedium:require('../../assets/font/Inter-Medium.ttf'),
        InterLight:require('../../assets/font/Inter-Light.ttf'),
        InterRegular:require('../../assets/font/Inter-Regular.ttf')
    })
if(!loaded ) return null
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{headerShown: false}}
                             initialRouteName="Home">
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;
