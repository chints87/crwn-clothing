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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`) 

  const snapShot = await userRef.get()

  console.log(snapShot)

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(error){
       console.log('there was an error creating user', error.message)
    }
  }

  return userRef;
}

// // 
// import firebase from 'firebase/app';
// import from 'firebase/auth';
// import from 'firebase/firestore';

// const config = {

// }

// firebase.initializeApp(config)

// export auth = firebase.auth()
// export firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase;
