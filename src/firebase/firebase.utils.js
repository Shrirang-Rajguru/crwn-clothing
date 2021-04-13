import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJ9xY2sgN4EeRphp1s7IuIGeXogY0u88I",
    authDomain: "crwn-project-db-561be.firebaseapp.com",
    projectId: "crwn-project-db-561be",
    storageBucket: "crwn-project-db-561be.appspot.com",
    messagingSenderId: "211692035388",
    appId: "1:211692035388:web:9649ca6ea07bc794249239",
    measurementId: "G-W602E4MNGE"
};

export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error craeting user',error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;