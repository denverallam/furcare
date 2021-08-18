import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';


const HomeScreen = props => {

    const dispatch = useDispatch()

    const userAccount = useSelector(state => state.user.user)

    return (
        <View style={styles.screen}>
            <Text>Edited Home Screen</Text>
            <Text>{userAccount.email}</Text>
            <Text>{userAccount.firstName}</Text>
            <Text>{userAccount.lastName}</Text>
            <Button
                title='Go to Report Screen'
                onPress={() => {
                    props.navigation.navigate('Report')
                }}
            />
        </View>
    )
}

// HomeScreen.navigationOptions = navData => {
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
    }
})

export default HomeScreen
