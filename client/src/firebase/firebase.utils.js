import firebase from "firebase/app";
// We can access firestore / auth by using the firebase we imported above
import "firebase/firestore"; // think of this as file paths
import "firebase/auth";
import collectionItemComponent from "../components/collection-item/collection-item.component";

const config = {
  apiKey: "AIzaSyDWWPA-SMEZHJd0hjlwUxxJrJOKeF6lrPw",
  authDomain: "crwn-db-4352d.firebaseapp.com",
  projectId: "crwn-db-4352d",
  storageBucket: "crwn-db-4352d.appspot.com",
  messagingSenderId: "217903184783",
  appId: "1:217903184783:web:d3302705fe7dcebd8369fa",
  measurementId: "G-99E04047WM",
};

// This function is used to store the user's details in the database
// Async because we're making an API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // Don't do anything if the user has logged out

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating the user", error);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("Collection Reference", collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); // Create a new document with a random unique id
    batch.set(newDocRef, obj);
  });
  return await batch.commit(); // Fires off our batch request and returns promise
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config); // Initialise the application with the above configuration

// Export the auth and firestore methods
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsibscribe = auth.onAuthStateChanged((userAuth) => {
      unsibscribe(); // unsubscribe as soon as we're done checking for the user
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" }); // We want to always trigger the goolge pop up whenever we use google auth provider for authentication and sign in
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
