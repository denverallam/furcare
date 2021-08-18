import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'
import colors from '../constants/colors'

const GridTile = props => {

    let Container = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Container = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <Container
                activeOpacity={.85}
                onPress={props.onSelect}
            >
                <View style={{ ...styles.container, ...{ backgroundColor: 'white' } }}>
                    <Text
                        style={styles.title}
                        numberOfLines={2}
                    >{props.name}</Text>
                </View>
            </Container>
        </View>

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
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: colors.accent,
        textAlign: 'right'
    }
})

export default GridTile
