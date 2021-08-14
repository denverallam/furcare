
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Container from './navigation/Container';
import MainNavigator from './navigation/MainNavigator';
import userReducer from './store/reducers/user';

export default function App() {

  const rootReducer = combineReducers({
    user: userReducer
  })

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
