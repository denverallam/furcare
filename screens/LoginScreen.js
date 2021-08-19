import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { login } from '../firebase';
import { fetchUser } from '../store/actions/user';

const LoginScreen = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const dispatch  = useDispatch()

    const loginHandler = () => {
        // login(user.email,user.password)
        // dispatch(fetchUser())
        console.log(user)
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
                    secureTextEntry={true}
                />
            </View >
            <Button title='Login' onPress={loginHandler} />
            <View style={styles.signIn}>
                <TouchableOpacity activeOpacity={.5} >
                    <View style={styles.viewRow}>
                        <Ionicons name='logo-google' size={20} />
                        <Text style={{ marginLeft: 10 }}>Sign in with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5} >
                    <View style={styles.viewRow}>
                        <Ionicons name='logo-facebook' size={20} />
                        <Text style={{ marginLeft: 10 }}>Sign in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    signIn: {
        justifyContent: 'center',
        alignItems: 'center',
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

export default LoginScreen
