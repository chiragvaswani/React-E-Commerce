// Action creator functions -> Functions that return objects that are in the correct format that the actions are supposed to be in
import UserActionTypes from "./user.types";

// We don't need a payload here as the saga will handle all the stuff and this is just for notfying the saga to begin
export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

// Return the user
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

// Return the error if any
export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// We'll need the email and password for the sign in
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});
