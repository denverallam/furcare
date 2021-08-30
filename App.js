
import React, { useState } from 'react';
import { Provider } from 'react-redux';
//import RegisterScreen from './screens/RegisterScreen';
//import LoginScreen from './screens/LoginScreen';
import store from './store/store';
import Container from './navigation/Container';
import { useFonts } from "expo-font";
import LandingScreen from './screens/LandingScreen';



export default function App() {

  let fontsLoaded = useFonts({
    'kawaii-stitch': require('./assets/fonts/Kawaii-Stitch.ttf'),
    'cocogoose-regular': require('./assets/fonts/Cocogoose Pro-trial.ttf'),
    'comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'comfortaa-bold': require('./assets/fonts/Comfortaa-Bold.ttf')
  })

  const [ isHome, setIsHome] = useState(true)

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
