import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Platform, TouchableOpacity } from 'react-native';
import { addPet, fetchAllPets, updatePet } from '../firebase/adoption';
import firebase from '../firebase/config';
import { useDocument } from 'react-firebase-hooks/firestore'
import * as ImagePicker from 'expo-image-picker';
import { color } from 'react-native-reanimated';




const AddPetForm = (props) => {

    const { petInfo } = props
    const [petDetails, setPetDetails] = useState({
        name: '',
        imageUrl: '',
        breed: '',
        size: '',
        status: '',
        sex: '',
        age: ''
    })

    useEffect(() => {
        if (petInfo.id) {
            setPetDetails(petInfo)
        }
    }, [petInfo])

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
            setPetDetails({ ...petDetails, imageUrl: result.uri });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.textInput}
                    placeholder="Name"
                    onChangeText={name => setPetDetails({ ...petDetails, name: name })}
                    value={petDetails.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Age</Text>
                <TextInput style={styles.textInput}
                    placeholder="Age"
                    onChangeText={age => setPetDetails({ ...petDetails, age: age })}
                    value={petDetails.age}
                    style={styles.input}
                // secureTextEntry={true}
                />
                <Text style={styles.text}>Breed</Text>
                <TextInput style={styles.textInput}
                    placeholder="Breed"
                    onChangeText={breed => setPetDetails({ ...petDetails, breed: breed })}
                    value={petDetails.breed}
                    style={styles.input}
                />
                <Text style={styles.text}>Sex</Text>
                <TextInput
                    placeholder="Sex"
                    onChangeText={sex => setPetDetails({ ...petDetails, sex: sex })}
                    value={petDetails.sex}
                    style={styles.input}
                />
                <Text style={styles.text}>Size</Text>
                <TextInput style={styles.textInput}
                    placeholder="Size"
                    onChangeText={size => setPetDetails({ ...petDetails, size: size })}
                    value={petDetails.size}
                    style={styles.input}
                />
                <Text style={styles.text}>Status</Text>
                <TextInput style={styles.textInput}
                    placeholder="Size"
                    onChangeText={status => setPetDetails({ ...petDetails, status: status })}
                    value={petDetails.status}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => pickImage()} >
                    <Text>Select Image</Text>
                </TouchableOpacity>
                {
                    petDetails.id
                        ?
                        <Button title='Update' onPress={() => {
                            updatePet(petDetails.id, petDetails)
                            props.hideForm(!props.hide)
                        }
                        } />
                        :
                        <Button title='Submit' onPress={() => {
                            addPet(petDetails)
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
        justifyContent: 'center',

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
        width: '80%',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 12,
        marginBottom: 10
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    buttonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderRadius: 10,
        borderColor: '#EE9F1A'
    },

})

export default AddPetForm
