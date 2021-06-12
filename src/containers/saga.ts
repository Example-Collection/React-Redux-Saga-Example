import { call, put, takeLatest } from "redux-saga/effects";
import { getWeather } from "../global/api";
import { WeatherResponse } from "../global/interface";

function* getWeatherSaga() {
  yield put({ type: "weather/setLoading", payload: true });
  try {
    const response: WeatherResponse = yield call(getWeather);
    yield put({ type: "weather/setData", payload: response });
  } catch (e) {
    console.log(e);
  } finally {
    yield put({ type: "weather/setLoading", payload: false });
  }
}

function* weatherSaga(): Generator {
  yield takeLatest("weather/getWeatherSaga", getWeatherSaga);
}

export default weatherSaga;
