import { combineReducers } from "redux";
import weather_reducer from "./containers/slice";
import weatherSaga from "./containers/saga";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  weather: weather_reducer,
});

function* rootSaga() {
  yield all([weatherSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof RootReducer>;

const Store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { Store, RootReducer };
