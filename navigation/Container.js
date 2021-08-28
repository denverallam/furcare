import React from "react"
import MainNavigator from "./MainNavigator"
import LoginScreen from "../screens/LoginScreen"
import { StyleSheet, View } from "react-native"
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../firebase/config'
import UserNavigation from "./UserNavigation";

const Container = () => {

    const [user, loading, error] = useAuthState(firebase.auth());
    console.log(user)

    return (
        <View style={styles.screen}>
            {user ? <MainNavigator /> : <UserNavigation />}
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
