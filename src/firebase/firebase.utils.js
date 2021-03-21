import firebase from "firebase/app";
// We can access firestore / auth by using the firebase we imported above
import "firebase/firestore";
import "firebase/auth";

const config = {};

firebase.initializeApp(config); // Initialise the application with the above configuration

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // We want to always trigger the goolge pop up whenever we use google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
