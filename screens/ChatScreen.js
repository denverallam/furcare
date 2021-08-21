// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import HeaderButton from '../components/HeaderButton';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';

// const ChatScreen = props => {

//     const [isHidden, setIsHidden] = useState(true)

//     return (
//         <View style={styles.screen}>
//                 {
//                     !isHidden && <Text>SHEEEEESH</Text>
//                 }
//                 <Button
//                     title={isHidden ? 'Show' : 'Hide'}
//                     onPress={() => {
//                         setIsHidden(!isHidden)
//                     }}
//                 />
//         </View>
//     )
// }

// // ChatScreen.navigationOptions = navData => {
// //     return {
// //       headerLeft: (
// //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
// //           <Item
// //             title="Menu"
// //             iconName="ios-menu"
// //             onPress={() => {
// //               navData.navigation.toggleDrawer();
// //             }}
// //           />
// //         </HeaderButtons>
// //       )
// //     };
// // };

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default ChatScreen

// @refresh reset

import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, TextInput, View, YellowBox, Button, LogBox } from 'react-native'
import firebase from 'firebase'
import 'firebase/firestore'
import { firebaseConfig } from '../config'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAoIXf74AciHfSsq4TWjowxREnTYZUelTA",
//     authDomain: "furcare-1a57d.firebaseapp.com",
//     projectId: "furcare-1a57d",
//     storageBucket: "furcare-1a57d.appspot.com",
//     messagingSenderId: "135905143301",
//     appId: "1:135905143301:web:5aaa48a67257851e324a6c",
//     measurementId: "G-71XF0HGXD9"
//   };

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const db = firebase.firestore()
const chatsRef = db.collection('chats')

const ChatScreen = (props) => {
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        readUser()
        const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                    //createdAt is firebase.firestore.Timestamp instance
                    //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

    async function readUser() {
        const user = await AsyncStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }
    async function handlePress() {
        const _id = Math.random().toString(36).substring(7)
        const user = { _id, name }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        setUser(user)
    }
    async function handleSend(messages) {
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Enter Name" value={name} onTextInput={setName}></TextInput>
                <Button onPress={handlePress} title="Enter the chat" />
            </View>
        )
    }
    return <GiftedChat messages={messages} user={user} onSend={handleSend} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})

export default ChatScreen