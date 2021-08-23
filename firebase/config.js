import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC_reDtHXecDQWPoa91ffmiAkU8737iLYE",
  authDomain: "furcare-30a9a.firebaseapp.com",
  databaseURL: "https://furcare-30a9a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "furcare-30a9a",
  storageBucket: "furcare-30a9a.appspot.com",
  messagingSenderId: "744310472674",
  appId: "1:744310472674:web:a5bed36b030723240943bb"
};



firebase.initializeApp(firebaseConfig)

export default firebase