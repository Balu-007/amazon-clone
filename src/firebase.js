// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSvcQeQRMUM57i6EZBZarIyfrYKDi9Wv0",
    authDomain: "clone-652e1.firebaseapp.com",
    projectId: "clone-652e1",
    storageBucket: "clone-652e1.appspot.com",
    messagingSenderId: "995185648724",
    appId: "1:995185648724:web:81f32122c166dc62d339c1",
    measurementId: "G-XBXC5TGJS7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};