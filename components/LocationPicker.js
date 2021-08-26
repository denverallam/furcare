import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'

const LocationPicker = props => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocationHandler = async () => {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
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

    var latitude = 37.78825;
    var longitude = -122.4324

    if (location) {
        latitude = location.coords.latitude
        longitude = location.coords.longitude
    }

    return (
        <View style={styles.locationPicker}>
            <MapView
                style={styles.map}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}
            >
                {
                    location && <Marker coordinate={location.coords} />
                }
            </MapView>
            <Button title="Get User Location" onPress={getLocationHandler} />

        </View>
    )
}

const styles = StyleSheet.create({
    locationPicker: {
        flex: 1,
        width: '100%'
    },
    map: {
        flex: 1
    }
})

export default LocationPicker