
import React from 'react';
import { Provider } from 'react-redux';
import { firebaseConfig } from './config';
import firebase from 'firebase'
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import store from './store/store';
import Container from './navigation/Container';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

export default function App() {

  return (
    <Provider store={store}>
      <Container />
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
    </Provider>
  );
}
