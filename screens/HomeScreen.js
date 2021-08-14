import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';


const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>HomeScreen</Text>
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
