import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherResponse } from "../global/interface";
import { WeatherState } from "./interface";

const initialState: WeatherState = {
  is_loading: true,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.is_loading = action.payload;
    },
    setData(state, action: PayloadAction<WeatherResponse>) {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setData } = weatherSlice.actions;

export default weatherSlice.reducer;
