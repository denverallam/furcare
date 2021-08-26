
import React from 'react';
import { Provider } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import store from './store/store';
import Container from './navigation/Container';
import AdoptionModal from './components/AdoptionModal';



export default function App() {

  return (
    <Provider store={store}>
      <Container />
      {/* <AdoptionModal /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
    </Provider>
  );
}
