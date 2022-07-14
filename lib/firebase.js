import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDhIpgmb3A-SpPaLKXuWThVKdnh9b7VJRI",
  authDomain: "next2-c6d82.firebaseapp.com",
  projectId: "next2-c6d82",
  storageBucket: "next2-c6d82.appspot.com",
  messagingSenderId: "700436355428",
  appId: "1:700436355428:web:111d66528c5148b9a9c271",
  measurementId: "G-1XLVCE42ZB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();


//Helpers

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}