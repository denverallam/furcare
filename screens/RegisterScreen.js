import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';
import firebase from '../firebase/config'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { addUser } from '../firebase/user';
// import { register } from '../firebase';
// import { fetchUser } from '../store/actions/user';

const RegisterScreen = () => {

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(firebase.auth());

    if (user) {
        console.log(user.user.uid)
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>First Name</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={firstName => setUserInfo({ ...userInfo, firstName: firstName })}
                    value={userInfo.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Last Name</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={lastName => setUserInfo({ ...userInfo, lastName: lastName })}
                    value={userInfo.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Email</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={email => setUserInfo({ ...userInfo, email: email })}
                    value={userInfo.email}
                    style={styles.input}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    placeholder="Password"
                    onChangeText={password => setUserInfo({ ...userInfo, password: password })}
                    value={userInfo.password}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View >
            <Button title='Register' onPress={() => {
                addUser(user.user.uid, userInfo);
            }} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
        marginBottom: 15
    },
    text: {
        fontSize: 12,
        marginBottom: 10
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 25
    },
    button: {
        width: '80%',
        padding: 15,
        backgroundColor: '#EE9F1A',
        color: 'white',
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default RegisterScreen
