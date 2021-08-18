import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const AdoptionScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>EDITED ADOPTION SCREEN</Text>
            <Button
                title='Go to Chat Screen'
                onPress={() => {
                    props.navigation.navigate('Chat')
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AdoptionScreen
