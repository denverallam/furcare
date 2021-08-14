import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>HomeScreen</Text>
            <Button
                title='Go to Report Screen'
                onPress={() => {
                    props.navigation.navigate('Report')
                }}
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

export default HomeScreen
