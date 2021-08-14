import React from "react"
import { useSelector } from "react-redux"
import MainNavigator from "./MainNavigator"
import LoginScreen from "../screens/LoginScreen"
import { StyleSheet, View } from "react-native"

const Container = () => {

    const user = useSelector(state => state.user)

    return (
        <View style={styles.screen}>
            {user.isLoggedIn ? <MainNavigator /> : <LoginScreen />}
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
