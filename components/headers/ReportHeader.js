import React from 'react';
import { Image, View, StyleSheet, Dimensions} from 'react-native';



const HeaderShape = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.shapeContainer}>
                <Image source={require('../.././assets/o-vertical-shape1.png')} style={styles.imageShape} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   /*  screen: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center'
    }, */

    shapeContainer: {
        width: '100%',
        height: '100%',
        //maxHeight: '100%',
        marginBottom: Dimensions.get('window').height > 400 ? '160%' : '200%'
    },

    imageShape: {
        
        width: Dimensions.get('window').width > 400 ? 500 : 400,
        height: Dimensions.get('window').height > 400 ? 500 : 300,

    },
})
export default HeaderShape;