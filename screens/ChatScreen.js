import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ChatScreen = props => {

    const [isHidden, setIsHidden] = useState(true)

    return (
        <View style={styles.screen}>
                {
                    !isHidden && <Text>EDITED CHAT SCREEN</Text>
                }
                <Button
                    title={isHidden ? 'Show' : 'Hide'}
                    onPress={() => {
                        setIsHidden(!isHidden)
                    }}
                />
        </View>
    )
}

// ChatScreen.navigationOptions = navData => {
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

export default ChatScreen
