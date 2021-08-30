import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, TextInput, Platform } from 'react-native';
import DonationTile from '../components/DonationTile';
import firebase from '../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import AddDonationForm from '../components/AddDonationForm';


const DonationScreen = props => {

    const donations = firebase.firestore().collection('donations')
    const donationQuery = donations.orderBy('name').limit(30)
    const [donationDetails, setDonationDetails] = useState({})
    const [donationList] = useCollectionData(donationQuery)
    const [isHidden, setIsHidden] = useState(true)
    const [totalAmount, setTotalAmount] = useState(0)

    const renderGridItem = itemData => {
        return <DonationTile donation={itemData.item} navigation={props.navigation} setIsHidden={setIsHidden} isHidden={isHidden} setDonationDetails={setDonationDetails} />
    }
    const hideForm = () => {
        setIsHidden(!isHidden)
    }

    const totalDonation = () => {
        let total = 0;
        if (donationList) {
            donationList.map(donation => {
                if (donation.amount) {
                    total += parseInt(donation.amount)
                }
            })
        }
        console.log("console total:", total)
        return total
    }

    useEffect(() => {
        let total = totalDonation()
        setTotalAmount(total)
    }, [totalDonation])

    return (
        <View style={styles.screen}>
            <View style={styles.centerText}>
                <Text>Total: {totalAmount}</Text>
            </View>
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
            <Button
                title={isHidden ? 'Add Donation' : 'Hide Form'}
                // onPress={() => addPet()}
                onPress={() => {
                    setIsHidden(!isHidden)
                    setDonationDetails({})
                }}
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
    centerText: {
        alignItems: 'center'
    },
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
