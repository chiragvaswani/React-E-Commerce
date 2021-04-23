import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // logger middleware
import { persistStore } from "redux-persist"; // allows our browser to cache the store depending upon the configuration options
import createSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware(); // this function can take an object with certain configuration settings

const middlewares = [sagaMiddleware];

// Use the logger only when the application is run locally
if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga); // write each individual saga in here

export const persistor = persistStore(store);

export default { store, persistor };
