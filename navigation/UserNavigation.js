import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


const LoginNavigator = createStackNavigator({
    Login: {screen : LoginScreen, navigationOptions: {headerShown: false } },
    Register: {screen : RegisterScreen, navigationOptions: {headerShown: false} },
})


export default createAppContainer(LoginNavigator);