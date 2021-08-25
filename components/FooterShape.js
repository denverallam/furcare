import React from 'react';
import { Image, View, StyleSheet, Dimensions} from 'react-native';
import colors from '../constants/colors';


const FooterShape = props => {
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/o-vertical-shape1.png')} style={styles.footerShape} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

})

export default FooterShape;

