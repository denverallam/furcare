import { LOG_OUT, USER_STATE_CHANGE } from "../constants/constants";
import firebase from "firebase";
import "firebase/auth";

export const fetchUser = () => {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    dispatch({
                        type: USER_STATE_CHANGE,
                        payload: snapshot.data()
                    })
                }
                else {
                    console.log('User does not exist')
                }
            })
        // console.log(snapshot.docs[0].data())
    })
}

export const logout = () => {
    return (
        {
            type: LOG_OUT,
            payload: null
        }
    )
}