import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCP_nUm1TKK6se8c5E3craCP6M-ZYFjn_Q",
  authDomain: "crwn-clothing-8552b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-8552b.firebaseio.com",
  projectId: "crwn-clothing-8552b",
  storageBucket: "crwn-clothing-8552b.appspot.com",
  messagingSenderId: "229976176140",
  appId: "1:229976176140:web:a094af097209b2e5762029",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;