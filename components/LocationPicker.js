import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const LocationPicker = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocationHandler = async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location)
    }

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.locationPicker}>
            <View style={styles.mapPreview}>
                <Text>No Location Yet</Text>
            </View>
            <Button title="Get User Location" onPress={getLocationHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    marginPrivew: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderWidth: 1
    }
})

export default LocationPicker
