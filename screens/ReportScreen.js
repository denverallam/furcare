import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { fetchAnimals } from '../firebase/adoption';
import ReportHeader from '../components/headers/ReportHeader';

const ReportScreen = props => {
    return (
        <View style={styles.screen}>
            <ReportHeader/>
            <Text>Edited Report Screen</Text>
            <Button
                title='Go to Report Screen'
                onPress={() => {
                    props.navigation.navigate('Report')
                    // fetchAnimals()
                }}
            />
        </View>
    )
}

// ReportScreen.navigationOptions = navData => {
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

export default ReportScreen
