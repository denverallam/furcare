import React from "react"
import MainNavigator from "./MainNavigator"
import LoginScreen from "../screens/LoginScreen"
import { StyleSheet, View } from "react-native"

const Container = () => {



    return (
        <View style={styles.screen}>
            {true ? <MainNavigator /> : <LoginScreen />}
            {/* <LoginScreen /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Container
