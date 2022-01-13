import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC08aduQn5fNCdXSaT7Q20r7r0kumpXwRU",
    authDomain: "talk-messenger-e396a.firebaseapp.com",
    projectId: "talk-messenger-e396a",
    storageBucket: "talk-messenger-e396a.appspot.com",
    messagingSenderId: "547531987812",
    appId: "1:547531987812:web:a220490e9955bab1957871"
}).auth();