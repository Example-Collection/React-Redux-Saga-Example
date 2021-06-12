import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API, API_KEY } from "./settings";
import { WeatherResponse } from "./interface";
const api = axios.create({
  baseURL: API,
});

const config: AxiosRequestConfig = {
  params: {
    key: API_KEY,
    q: "Seoul",
  },
};

export const getWeather = async (): Promise<AxiosResponse<WeatherResponse>> => {
  const response = await api.get("", config);
  return response;
};
