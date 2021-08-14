import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportScreen';
import AdoptionScreen from '../screens/AdoptionScreen';
import ChatScreen from '../screens/ChatScreen';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.accent
        },
        headerTintColor: 'white'
    }
}

const HomeNavigator = createStackNavigator({
    Home: { 
        screen: HomeScreen 
    },
    Report: {
        screen: ReportScreen 
    }
}, defaultStackNavOptions)


const ReportNavigator = createStackNavigator({
    Report: {
        screen: ReportScreen 
    }
}, defaultStackNavOptions)

const AdoptionNavigator = createStackNavigator({
    Adopt: { 
        screen: AdoptionScreen 
    },
    Chat: {
        screen: ChatScreen 
    }
}, defaultStackNavOptions)

const ChatNavigator = createStackNavigator({
    Chat: ChatScreen
}, defaultStackNavOptions)

const styles = StyleSheet.create({
    text: {
        color: colors.accent
    }
})

const MainNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Home</Text>,
                tintColor: colors.accent,
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-home' size={25} color={colors.accent} />
                },
                tabBarColor: 'white'
            }
        },
        Report: {
            screen: ReportNavigator,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Report</Text>,
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-camera' size={25} color={colors.accent} />
                },
                tabBarColor: 'white'
            }
        },
        Adopt: {
            screen: AdoptionNavigator,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Adopt</Text>,
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-heart' size={25} color={colors.accent} />
                },
                tabBarColor: 'white'
            },
        },
        Chat: {
            screen: ChatNavigator,
            navigationOptions: {
                tabBarLabel: <Text style={styles.text}>Chat</Text>,
                tabBarIcon: (tabInfo) => {
                    return <Ionicons name='ios-chatbubble' size={25} color={colors.accent} />
                },
                tabBarColor: 'white'
            }
        }
    })




export default createAppContainer(MainNavigator);