import React, { useEffect, useState } from "react"
import MainNavigator from "./MainNavigator"
import LoginScreen from "../screens/LoginScreen"
import { StyleSheet, View } from "react-native"
import firebase from "firebase"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../store/actions/user"
const Container = () => {

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchUser())
    // }, [])

    // const userAccount = useSelector(state => state.user.user)

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
