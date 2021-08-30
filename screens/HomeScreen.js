import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimal } from '../firebase/adoption';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ReportHeader from '../components/headers/ReportHeader';
import { style } from 'styled-system';



const HomeScreen = props => {

    const dispatch = useDispatch()

    const userAccount = useSelector(state => state.user.user)


    const animal = {
        id: 'c7',
        name: 'Cotton',
        imageUrl: 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-1/p200x200/235596487_1195245204221165_2533532459951954439_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeEsqUcovDv6oJ3gx8PBlzd9VtfG5eI0clJW18bl4jRyUnGXK4mQiMYprXbY7r1QcIpOW8vjHnUnO10UJJewVKkI&_nc_ohc=TfnrYJt3xKcAX_n5eaK&_nc_ht=scontent.fmnl4-5.fna&oh=69b612bbc13b26bb815817f71c25f20b&oe=61250AF7',
        breed: 'aspin',
        color: 'brown',
        size: 'small',
        status: 'healhty',
        sex: 'male'
    }

    /*  function LogoTitle() {
         return (
             <Image 
             source={require('../assets/logo.png')}
             style={{width: 50, height: 50}} />
         )
     }
  */
    return (
        <View style={styles.screen}>
            {/* <Text>Edited Home Screen</Text>
            <Text>{userAccount.email}</Text>
            <Text>{userAccount.firstName}</Text>
            <Text>{userAccount.lastName}</Text> */}
            <ReportHeader/>

            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Box1</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>Box1</Text>
                    </View>
                </View>
            </View>

            {/*  furcare header in homescreen */}
            {/* <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
            </View> */}
            <View style={styles.dashboardContainer}>
                <Text style={styles.textDashboard}>Your Dashboard</Text>
            </View>
            <Button style={styles.button}
                title='Go to Report Screen'
                onPress={() => {
                    // props.navigation.navigate('Report')
                    // addAnimal(animal)
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
    },

    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',

    },

    box: {
        width: '50%',
        height: '50%',
    },

    dashboardContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    textDashboard: {
        fontFamily: 'comfortaa-bold'
    },

    button: {
        backgroundColor: '#EE9F1A',
        fontFamily: 'comfortaa',
        borderRadius: 20
    },




})

export default HomeScreen
