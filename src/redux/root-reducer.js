// Writing the store
// Base reducer that represents state of the entire application

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // gives the localStorage object from the window object

// Possible configurations for redux persist -
const persistConfig = {
  key: "root", // At what point inside the reducer object do we want to store everything
  storage, // storage: storage where the storage value is the localStorage that we imported
  whitelist: ["cart"], // list consisting of string names of the reducers that we wish to store
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
