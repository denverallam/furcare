import { LOG_OUT, USER_STATE_CHANGE } from "../constants/constants"

const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_STATE_CHANGE:
            return { ...state, user: action.payload }
        case LOG_OUT:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default userReducer