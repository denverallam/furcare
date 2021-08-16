import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../firebase';
import { fetchUser } from '../store/actions/user';

const RegisterScreen = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })


    const registerHandler = () => {
        register(user)
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>First Name</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={firstName => setUser({ ...user, firstName: firstName })}
                    value={user.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Last Name</Text>
                <TextInput
                    placeholder="Name"
                    onChangeText={lastName => setUser({ ...user, lastName: lastName })}
                    value={user.name}
                    style={styles.input}
                />
                <Text style={styles.text}>Email</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={email => setUser({ ...user, email: email })}
                    value={user.email}
                    style={styles.input}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    placeholder="Password"
                    onChangeText={password => setUser({ ...user, password: password })}
                    value={user.password}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View >
            <Button title='Register' onPress={registerHandler} />
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
