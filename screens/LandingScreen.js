import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import colors from '../constants/colors';
const LandingScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.shapeContainer}>
                <Image source={require('../assets/o-vertical-shape1.png')} style={styles.imageShape} />
            </View>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.logoTextWrapper}>
                <Text style={styles.furText}>
                    fur
                </Text>
                <Text style={styles.careText}>
                    care
                </Text>
            </View>

            <View style={styles.petsWrapper}>
                <Image source={require('../assets/pets.png')} style={styles.pets} />
            </View>

            <Button
                title="Go to home page"
                onPress={() => {
                    props.onHide()
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.defaultBg,
    },

    logoTextWrapper: {
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'row'

    },

    imageShape: {
        /*  width: '100%',
         height: '100%', */

    },

    shapeContainer: {
        width: '100%',
        height: '60%', //Dimensions.get('window').height / 2,
        alignItems: 'center',
        marginTop: '-100%'

    },

    logo: {
        marginTop: '50%'
    },

    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    furText: {
        color: colors.accent,
        fontFamily: 'kawaii-stitch',
        fontSize: 20,
        marginTop: '2%',

    },

    careText: {
        color: 'red',
        fontFamily: 'kawaii-stitch',
        fontSize: 20,
        marginTop: '2%'
    },

    petsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    pets: {
        width: 200,
        height: 200,
        marginTop: 50
    },
})

export default LandingScreen