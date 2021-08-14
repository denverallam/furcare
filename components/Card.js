import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        backgroundColor: 'white',
        shadowOpacity: 6,
        shadowRadius: 0.5,
        padding: 20,
        borderRadius: 10,
        elevation: 8,
    }
})

export default Card
