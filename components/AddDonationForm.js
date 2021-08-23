import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TextInput, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addDonation, updateDonation } from '../firebase/donation';

const AddDonationForm = (props) => {

    const { donationInfo } = props
    const [donationDetails, setDonationDetails] = useState({
        name: '',
        imageUrl: '',
        type: '',
        amount: '',
        isVerified: false
    })

    useEffect(() => {
        if (donationInfo.id) {
            setDonationDetails(donationInfo)
        }
    }, [donationInfo])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setDonationDetails({ ...donationDetails, imageUrl: result.uri });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Text style={styles.text}>Name</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={name => setDonationDetails({ ...donationDetails, name: name })}
                    value={donationDetails.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Type</Text>
                <TextInput
                    placeholder="Type"
                    onChangeText={type => setDonationDetails({ ...donationDetails, type: type })}
                    value={donationDetails.type}
                    style={styles.input}
                />
                <Text style={styles.text}>Amount</Text>
                <TextInput
                    placeholder="Amount"
                    onChangeText={amount => setDonationDetails({ ...donationDetails, amount: amount })}
                    value={donationDetails.amount}
                    style={styles.input}
                // secureTextEntry={true}
                />
                <Button title='Select Image' onPress={() => pickImage()} />
                {
                    donationDetails.id
                        ?
                        <Button title='Update' onPress={() => {
                            updateDonation(donationDetails.id, donationDetails)
                            props.hideForm(!props.hide)
                        }
                        } />
                        :
                        <Button title='Submit' onPress={() => {
                            addDonation(donationDetails)
                            props.hideForm(!props.hide)
                        }
                        } />
                }

            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    inputContainer: {
        width: '80%'
    },
    text: {
        fontSize: 12,
        marginBottom: 10
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
})

export default AddDonationForm
