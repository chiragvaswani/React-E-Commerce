import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

// We're not using the function to do signInWithPopup from firebase.utils because we need the value that is returned when signInWithPopup is executed
export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {
    console.log(error.message);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
