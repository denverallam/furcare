import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { ADOPTION_LIST } from '../data/dummy';

const AnimalDetailScreen = (props) => {


    const animal = props.navigation.getParam('animal')
    const animalDetail = ADOPTION_LIST.find(pet => pet.id === animal.id)

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title });
        props.navigation.setParams({ name: animalDetail.name });
    }, [animal.name]);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: animal.imageUrl }}
                />
            </View>
            <View style={styles.details}>
                <Text>{animal.size.toUpperCase()}</Text>
                <Text>{animal.color.toUpperCase()}</Text>
                <Text>{animal.status.toUpperCase()}</Text>
            </View>
        </ScrollView>
    )
}

AnimalDetailScreen.navigationOptions = navigationData => {

    const { name } = navigationData.navigation.getParam('animal');
    console.log(name)
    return {
        headerTitle: name
    }
}


const styles = StyleSheet.create({
    textContainer: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: 'black',
        borderWidth: 1
    }, 
    imageContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AnimalDetailScreen
