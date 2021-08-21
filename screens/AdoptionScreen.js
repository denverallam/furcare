import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ADOPTION_LIST } from '../data/dummy'
import GridTile from '../components/GridTile';
import firebase from '../firebase/config';
import { addPet, fetchAllPets } from '../firebase/adoption';
import { useCollectionData } from 'react-firebase-hooks/firestore'



const AdoptionScreen = props => {

    const pets = firebase.firestore().collection("pets")
    const query = pets.orderBy('name').limit(10)

    // const [petList, setPetList] = useState([])

    const [petList] = useCollectionData(query)

    // const fetchData = () => {
    //     fetchAllPets()
    //         .then(
    //             res => setPetList(res)
    //         )
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const renderGridItem = itemData => {
        return <GridTile animal={itemData.item} navigation={props.navigation} />
    }

    return (
        <View style={styles.container}>
            <Button
                title='Add Pet'
                onPress={() => addPet()}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={petList}
                renderItem={renderGridItem}
                numColumns={2}
            />
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1
    }
})

export default AdoptionScreen
