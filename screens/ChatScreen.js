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

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// @refresh reset

// import React, { useState, useEffect, useCallback } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { StyleSheet, TextInput, View, YellowBox, Button, LogBox } from 'react-native'
// import 'firebase/firestore'
// import firebase from '../firebase/config'

// if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig)
// }

// LogBox.ignoreLogs(['Setting a timer for a long period of time'])

// const db = firebase.firestore()
// const chatsRef = db.collection('chat')

// const ChatScreen = (props) => {
//     const [user, setUser] = useState(null)
//     const [name, setName] = useState('')
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
//         readUser()
//         const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//             const messagesFirestore = querySnapshot
//                 .docChanges()
//                 .filter(({ type }) => type === 'added')
//                 .map(({ doc }) => {
//                     const message = doc.data()
//                     //createdAt is firebase.firestore.Timestamp instance
//                     //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
//                     return { ...message, createdAt: message.createdAt.toDate() }
//                 })
//                 .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//             appendMessages(messagesFirestore)
//         })
//         return () => unsubscribe()
//     }, [])

//     const appendMessages = useCallback(
//         (messages) => {
//             setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
//         },
//         [messages]
//     )

//     async function readUser() {
//         const user = await AsyncStorage.getItem('user')
//         if (user) {
//             setUser(JSON.parse(user))
//         }
//     }
//     async function handlePress() {
//         const _id = Math.random().toString(36).substring(7)
//         const user = { _id, name }
//         await AsyncStorage.setItem('user', JSON.stringify(user))
//         setUser(user)
//     }
//     async function handleSend(messages) {
//         const writes = messages.map((m) => chatsRef.add(m))
//         await Promise.all(writes)
//     }

//     if (!user) {
//         return (
//             <View style={styles.container}>
//                 <TextInput style={styles.input} placeholder="Enter Name" value={name} onTextInput={setName}></TextInput>
//                 <Button onPress={handlePress} title="Enter the chat" />
//             </View>
//         )
//     }
//     return <GiftedChat messages={messages} user={user} onSend={handleSend} />
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 30,
//     },
//     input: {
//         height: 50,
//         width: '100%',
//         borderWidth: 1,
//         padding: 15,
//         marginBottom: 20,
//         borderColor: 'gray',
//     },
// })

// export default ChatScreen

// import React  from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from '../navigation/rootNavigation';
// import { createStackNavigator } from '@react-navigation/stack';

// import Main from '../components/Main'
// import Chat from '../components/Chat'

// export default function ChatScreen() {

//   const Stack = createStackNavigator();

//   return (
//       <NavigationContainer ref={navigationRef}>
//         <Stack.Navigator mode="modal" >
//           <Stack.Screen name="Main" component={Main} />
//           <Stack.Screen name="Chat" component={Chat} />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//       container: {
//           flex: 1,
//           backgroundColor: '#fff',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: 30,
//       },
// });

// import React, {useState} from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

// const ChatScreen = props => {

//   const [name, setName] = useState("")

//   const onPress = () =>
//     props.navigation.navigate('Chats', { name: name });

//   const onChangeText = name => setName(name);

//     return (
//       <View>
//         <Text style={styles.title}>Enter your name:</Text>
//         <TextInput
//           style={styles.nameInput}
//           onChangeText={onChangeText}
//           value={name}
//         />
//         <TouchableOpacity onPress={onPress}>
//           <Text style={styles.buttonText}>Done</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }


// const offset = 24;

// const styles = StyleSheet.create({
//   title: {
//     marginTop: offset,
//     marginLeft: offset,
//     fontSize: offset,
//   },
//   nameInput: {
//     height: offset * 2,
//     margin: offset,
//     paddingHorizontal: offset,
//     borderColor: '#111111',
//     borderWidth: 1,
//   },
//   buttonText: {
//     marginLeft: offset,
//     fontSize: offset,
//   },
// });

// export default ChatScreen;

import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import firebase from '../firebase/config'
import 'firebase/auth'

// import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
// import { auth } from 'react-native-firebase'
// import { set } from 'react-native-reanimated'

// const auth = firebase.auth();
const firestore = firebase.firestore();
// const [user] = useAuthState(auth);

const ChatScreen = props => {

  const messageRef = firestore.collection('chats');
  const query = messageRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async () => {
    // const {uid, photoURL} = auth.currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: '123456',
      photoURL: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/80714300_2854646211222897_7819175695388508160_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHtlM92bCQ0VF82fNkd00AY-0WslkZOqYf7RayWRk6phzHR19srk26hTVwpG0Zn4B1i5kmcZaM2rJaY12k5ytLl&_nc_ohc=rqkfsQgd-0QAX8XU0fu&_nc_ht=scontent.fmnl17-3.fna&oh=349c23a673c86b4bce0ac2517391e121&oe=614CB56E'
    })

    setFormValue('');
  }

  return (
    <View style={styles.container}>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <TextInput
        placeholder="Message"
        onChangeText={message => setFormValue(message)}
        value={formValue}
      />

      <Button
        title='Send'
        onPress={sendMessage}
      />
    </View>
  )
}

const ChatMessage = props => {
  const { text, uid } = props.message;
  // const messageClass = uid === auth.currentUser.uid? 'sent' : 'received';
  return (
    <View style={styles.container}>
      <Text>
        {props.message.text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create (
  {
    container: {
      width: '100%',
    }
  }
)


export default ChatScreen;
