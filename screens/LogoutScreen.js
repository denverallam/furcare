import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPet, fetchAllPets, removePet } from '../firebase/adoption';


const LogoutScreen = props => {

    return (
        <View style={styles.screen}>
            <Button
                title='Logout'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default LogoutScreen
