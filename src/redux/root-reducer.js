// Writing the store
// Base reducer that represents state of the entire application

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
