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
import { Ionicons } from '@expo/vector-icons';
import { login } from '../firebase/user';


const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    placeholder="Email"
                    onChangeText={email => setEmail(email)}
                    value={email}
                    style={styles.input}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    placeholder="Password"
                    onChangeText={password => { setPassword(password) }}
                    value={password}
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View >
            <Button title='Login' onPress={() => login(email, password)} />
            <View style={styles.signIn}>
                <TouchableOpacity activeOpacity={.5} >
                    <View style={styles.viewRow}>
                        <Ionicons name='logo-google' size={20} />
                        <Text style={{ marginLeft: 10 }}>Sign in with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.5}>
                    <View style={styles.viewRow}>
                        <Ionicons name='logo-facebook' size={20} />
                        <Text style={{ marginLeft: 10 }}>Sign in with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            activeOpacity={.5}
            onPress={() => {
                props.navigation.navigate('Register')
            }}
            >
                <Text>Register</Text>
            </TouchableOpacity>
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
