import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { createReducer } from "./reducers";

import { updateSeatsSaga } from "./middleware/saga";

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const { run: runSaga } = sagaMiddleware;
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: createReducer(),
    middleware: middlewares,
  });

  runSaga(updateSeatsSaga);

  return store;
};

export default configureAppStore;
