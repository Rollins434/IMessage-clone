/* eslint-disable no-unused-vars */
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC_uCHM7fiM7UTrJDQ7Ao07Mj8sSy2w9iM",
    authDomain: "imessage-clone-50014.firebaseapp.com",
    databaseURL: "https://imessage-clone-50014.firebaseio.com",
    projectId: "imessage-clone-50014",
    storageBucket: "imessage-clone-50014.appspot.com",
    messagingSenderId: "975905772375",
    appId: "1:975905772375:web:27cd95a3198340b0b9e412",
    measurementId: "G-4RPJDQQBB4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;