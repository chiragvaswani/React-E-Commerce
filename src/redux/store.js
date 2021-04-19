import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // logger middleware
import { persistStore } from "redux-persist"; // allows our browser to cache the store depending upon the configuration options
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

// Use the logger only when the application is run locally
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
