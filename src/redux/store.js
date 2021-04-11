import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // logger middleware
import { persistStore } from "redux-persist"; // allows our browser to cache the store depending upon the configuration options

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor };
