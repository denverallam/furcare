
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import store from './store/store';
import Container from './navigation/Container';
import AdoptionModal from './components/AdoptionModal';
import LandingScreen from './screens/LandingScreen';



export default function App() {

  const [isHome, setIsHome] = useState(true)

  const hide = () => {
    setIsHome(!isHome)
  }

  return (
    <Provider store={store}>
      {
        isHome ? <LandingScreen onHide={hide}/> : <Container />
      }
      {/* <Container /> */}
      {/* <AdoptionModal /> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
    </Provider>
  );
}
