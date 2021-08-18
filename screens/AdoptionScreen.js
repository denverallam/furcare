import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { ADOPTION_LIST } from '../data/dummy'
import GridTile from '../components/GridTile';

const AdoptionScreen = props => {

    const renderGridItem = itemData => {
        return <GridTile title={itemData.item.name} />
    }

    return (

        <View style={styles.screen}>
            <Text>AdoptionScreen</Text>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={ADOPTION_LIST}
                renderItem={renderGridItem}
                numColumns={2}
            />
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
