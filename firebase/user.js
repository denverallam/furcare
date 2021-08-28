import firebase from "../firebase/config";

const users = firebase.firestore().collection("users")

export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            // console.log(result.user.uid)
        })
        .catch(err => console.log(err))
}

export const register = user => {
    const { email, password, firstName, lastName } = user
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(result => {
            const id = firebase.auth().currentUser.uid
            users
                .doc(firebase.auth().currentUser.uid)
                .set({ email, password, firstName, lastName, id })
        })
        .catch(err => {
            console.log(err)
        })
}