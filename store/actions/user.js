import { LOG_IN, LOG_OUT } from "../constants/constants";


export const login = () => {
        return {
            type: LOG_IN,
            payload: true
        };
};

export const logout = () => {
    return {
        type: LOG_OUT,
        payload: false
    };
};