// Action creator functions -> Functions that return objects that are in the correct format that the actions are supposed to be in

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});
