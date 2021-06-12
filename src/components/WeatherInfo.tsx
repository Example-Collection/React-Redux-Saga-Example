import React from "react";
import { WeatherResponse } from "../globals/interface";

interface IWeatherInfo {
  getApi: () => void;
  data: WeatherResponse;
}
