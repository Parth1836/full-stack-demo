import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import { watchIncrementAsync } from "./sagas/csSaga";
import { watchAgeAsync } from "./sagas/ageSaga";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
