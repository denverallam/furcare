import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, ImageBackground, Platform } from 'react-native'
import colors from '../constants/colors';
import { deleteAnimal, removePet, updateAnimal } from '../firebase/adoption';
import { removeDonation } from '../firebase/donation';

const DonationTile = props => {

    const { donation, isHidden } = props

    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={() => {
                // removePet(animal.id)
                props.setDonationDetails(donation)
                props.setIsHidden(!isHidden)
            }}
        >
            <ImageBackground
                source={{ uri: donation.imageUrl }}
                style={styles.bgImage}
            >
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <View style={styles.titleContainer}>
                            <TouchableOpacity onPress={()=> removeDonation(donation.id)}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {donation.amount}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity >


    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .26,
        shadowRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 15
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'right'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5
    },
    bgImage: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%'
    }
});
export default DonationTile
