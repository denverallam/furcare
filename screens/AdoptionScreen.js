import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TextInput, Platform } from 'react-native';
import GridTile from '../components/GridTile';
import firebase from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AddPetForm from '../components/AddPetForm';


const AdoptionScreen = props => {

    const pets = firebase.firestore().collection("pets")
    const query = pets.orderBy('name').limit(10)

    const [isHidden, setIsHidden] = useState(true)
    const [petList] = useCollectionData(query)


    const renderGridItem = itemData => {
        return <GridTile animal={itemData.item} navigation={props.navigation} />
    }


    const hideForm = () => {
        setIsHidden(!isHidden)
    }

    return (
        <View style={styles.screen}>
            <Button
                title='Add Pet'
                // onPress={() => addPet()}
                onPress={() => setIsHidden(!isHidden)}
            />
            {
                isHidden
                    ? <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={petList}
                        renderItem={renderGridItem}
                        numColumns={2}
                    />
                    : <AddPetForm hideForm={setIsHidden} hide={isHidden}/>
            }

        </View>

    )
}

// AdoptionScreen.navigationOptions = navData => {
//     return {
//       headerLeft: (
//         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//           <Item
//             title="Menu"
//             iconName="ios-menu"
//             onPress={() => {
//               navData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       )
//     };
// };

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

export default AdoptionScreen
