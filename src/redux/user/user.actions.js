// Action creator functions -> Functions that return objects that are in the correct format that the actions are supposed to be in
import { UserActionTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
