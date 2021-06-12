import React from "react";
import { WeatherResponse } from "../global/interface";

interface IWeatherInfo {
  getApi: () => void;
  data: WeatherResponse;
}
