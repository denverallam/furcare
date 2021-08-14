import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/user';

const LoginScreen = () => {

    const [user, setUser] = useState({
        name: 'Denver Allam',
        email: '',
        password: ''
    })

    const dispatch = useDispatch()

    const verifyAccount = () => {
        if (user.email === '' || user.password === '') {
            Alert.alert('Please enter your email and password!')
        }
        else if (user.email === 'admin' && user.password === '12345'){
            Alert.alert('Welcome ' + user.name)
            dispatch(login())
        }
        else{
            Alert.alert('Incorrect credentials!')
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
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
                    style={styles.input}
                />
            </View >
            <TouchableNativeFeedback activeOpacity={.5} onPress={verifyAccount}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableNativeFeedback>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
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
        textAlign:'center'
    }
})

export default LoginScreen
