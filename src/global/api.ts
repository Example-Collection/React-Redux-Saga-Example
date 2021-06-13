import axios, { AxiosRequestConfig } from "axios";
import { API, API_KEY } from "./settings";
import { WeatherResponse } from "./interface";

const config: AxiosRequestConfig = {
  params: {
    key: API_KEY,
    q: "Seoul",
  },
};

const Axios = axios.create(config);

export const getWeather = async (): Promise<WeatherResponse> => {
  const response = await Axios.get<WeatherResponse>(`${API}`);
  return response.data;
};
