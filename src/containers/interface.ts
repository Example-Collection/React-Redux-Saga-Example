import { WeatherResponse } from "../global/interface";

export interface WeatherState {
  is_loading: boolean;
  data?: WeatherResponse;
}
