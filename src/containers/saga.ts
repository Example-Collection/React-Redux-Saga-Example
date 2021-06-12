import { call, put } from "redux-saga/effects";
import { getWeather } from "../global/api";

function* getWeatherSaga() {
  yield put;
  yield call(getWeather);
}
