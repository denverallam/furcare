import { LOG_IN, LOG_OUT } from "../constants/constants"

const initialState = {
    isLoggedIn: false,
    name: '',
    password: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, isLoggedIn: true }
        case LOG_OUT:
            return { ...state, isLoggedIn: false }
        default:
            return state
    }

}

export default userReducer