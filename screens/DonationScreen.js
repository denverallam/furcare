import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TextInput, Platform } from 'react-native';
import GridTile from '../components/GridTile';
import firebase from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AddPetForm from '../components/AddPetForm';
import AddDonationForm from '../components/AddDonationForm';


const DonationScreen = props => {

    const donations = firebase.firestore().collection('donations')
    const donationQuery = donations.orderBy('name').limit(30)
    const [donationDetails, setDonationDetails] = useState({})

    const [donationList] = useCollectionData(donationQuery)
    const [isHidden, setIsHidden] = useState(true)

    const renderGridItem = itemData => {
        return <GridTile donation={itemData.item} navigation={props.navigation} setIsHidden={setIsHidden} isHidden={isHidden} setDonationDetails={setDonationDetails} />
    }

    const hideForm = () => {
        setIsHidden(!isHidden)
    }

    return (
        <View style={styles.screen}>
            <Button
                title={isHidden ? 'Add Donation' : 'Hide Form'}
                // onPress={() => addPet()}
                onPress={() => {
                    setIsHidden(!isHidden)
                    setDonationDetails({})
                }}
            />
            {
                isHidden
                    ? <FlatList
                        keyExtractor={(item, index) => item.id}
                        data={donationList}
                        renderItem={renderGridItem}
                        numColumns={1}
                    />
                    : <AddDonationForm hideForm={setIsHidden} hide={isHidden} donationInfo={donationDetails} />
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

export default DonationScreen
