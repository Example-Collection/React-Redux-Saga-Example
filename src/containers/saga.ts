import { call, put, takeLatest } from "redux-saga/effects";
import { getWeather } from "../global/api";
import { WeatherResponse } from "../global/interface";
import { setData, setLoading } from "./slice";

function* getWeatherSaga() {
  yield put(setLoading(true));
  try {
    const response: WeatherResponse = yield call(getWeather);
    yield put(setData(response));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(setLoading(false));
  }
}

function* weatherSaga(): Generator {
  yield takeLatest("weather/getWeatherSaga", getWeatherSaga);
}

export default weatherSaga;
