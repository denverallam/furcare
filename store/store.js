import { combineReducers, createStore, applyMiddleware } from "redux";
import  userReducer  from './reducers/user'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store