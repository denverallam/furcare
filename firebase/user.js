import firebase from "firebase";
import "firebase/auth";
import { firebaseConfig } from "../config";

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfigs)
  }

// const db = firebase.firestore().collection("users")


export const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => console.log(err))
}

// export const register = (user) => {
//     const { email, password, firstName, lastName } = user
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then(result => {
//             firebase.firestore().collection("users")
//                 .doc(firebase.auth().currentUser.uid)
//                 .set({ email, password, firstName, lastName })
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

export const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;

            console.log(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

export const facebookSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            console.log(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}