import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform, Touchable, ScrollView, Image } from 'react-native'
import firebase from '../firebase/config'
import * as ImagePicker from 'expo-image-picker';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';
import Camera from '../components/Camera';
import { addChat } from '../firebase/chats';
// import { auth } from 'react-native-firebase'
// import { set } from 'react-native-reanimated'

const auth = firebase.auth();

const ChatScreen = props => {

  const firestore = firebase.firestore();
  const [user] = useAuthState(auth);

  const messageRef = firestore.collection('chats');
  const query = messageRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const [image, setImage] = useState(null);
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const sendMessage = async () => {
    const { uid, photoURL } = auth.currentUser;
    if (formValue !== '' || image) {
      await addChat({
        uid,
        text: formValue,
        image,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.6435-9/80714300_2854646211222897_7819175695388508160_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHtlM92bCQ0VF82fNkd00AY-0WslkZOqYf7RayWRk6phzHR19srk26hTVwpG0Zn4B1i5kmcZaM2rJaY12k5ytLl&_nc_ohc=rqkfsQgd-0QAX8XU0fu&_nc_ht=scontent.fmnl17-3.fna&oh=349c23a673c86b4bce0ac2517391e121&oe=614CB56E'
      })
      setFormValue('');
      setImage(null)
    }
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);



  return (
    <View style={styles.container}>
      <ScrollView>
        {messages && messages.map(msg =>
          <View style={styles.messageContainer}>
            <ChatMessage key={msg.id} message={msg} />
          </View>
        )}
      </ScrollView>

      <View style={styles.rowContainer}>
        {
          image ? <Image source={{ uri: image }} style={styles.image} />
            :
            <TextInput
              style={styles.textInput}
              placeholder="Message"
              onChangeText={message => setFormValue(message)}
              value={formValue}
            />
        }

        <TouchableOpacity
          style={styles.icon}
          activeOpacity={.5}
          onPress={() => {
            props.navigation.navigate('Camera')
          }}
        >
          <Ionicons
            name='camera'
            size={25}
            color={colors.accent}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={.5}
          onPress={pickImage}>
          <Ionicons
            name='images'
            size={25}
            color={colors.accent}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          activeOpacity={.5}
          onPress={sendMessage}>
          <Ionicons
            name='send'
            size={25}
            color={colors.accent}
          />
        </TouchableOpacity>
      </View>
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  )


}

const ChatMessage = props => {
  const { text, uid, image } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <View style={messageClass === 'sent' ? styles.right : styles.left}>
      {
        image
          ? <Image source={{ uri: image }} style={styles.image} />
          : <View style={messageClass === 'sent' ? styles.sent : styles.received}>
            <Text style={messageClass === 'sent' ? styles.white : styles.black}>
              {text}
            </Text>
          </View>
      }
    </View>


  )
}

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImage(result.uri);
  }
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250
  },
  white: {
    color: 'white'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  left: {
    flex: 1,
    alignItems: 'flex-start'
  },
  sent: {
    borderRadius: 25,
    backgroundColor: colors.accent,
    padding: 15,
    margin: 5,
    maxWidth: '50%',
  },
  received: {
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    maxWidth: '50%'
  },
  messageContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: "100%"
  },
  icon: {
    marginHorizontal: 10
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  textInput: {
    flex: 1,
    padding: 20
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: 1
  }
});

export default ChatScreen;