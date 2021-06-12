import React from "react";
import { WeatherResponse } from "../global/interface";
import styled from "styled-components";

interface IWeatherInfo {
  data?: WeatherResponse;
  is_loading: boolean;
}

const WeatherInfo = ({ data, is_loading }: IWeatherInfo): JSX.Element => {
  if (is_loading) return <div>loading..</div>;
  else {
    if (data) {
      return (
        <Container>
          <LocationInformation>
            <Key>Name: </Key>
            <Value>{data.location.name}</Value>
            <Key>Country: </Key>
            <Value>{data.location.country}</Value>
            <Key>Local Time: </Key>
            <Value>{data.location.localtime}</Value>
          </LocationInformation>
          <Space />
          <CurrentInformation>
            <Key>Temperature: </Key>
            <Value>{data.current.temp_c}</Value>
            <Key>Condition: </Key>
            <Value>{data.current.condition.text}</Value>
            <Key>Wind(kph): </Key>
            <Value>{data.current.wind_kph}</Value>
            <Key>Precipitation(mm): </Key>
            <Value>{data.current.precip_mm}</Value>
            <Key>Humidity: </Key>
            <Value>{data.current.humidity}</Value>
            <Key>Feels like: </Key>
            <Value>{data.current.feelslike_c}</Value>
          </CurrentInformation>
        </Container>
      );
    } else {
      return <div>FAIL</div>;
    }
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #4dca9a;
`;

const LocationInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #afafaf;
`;

export const CurrentInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffc62a;
`;

const Key = styled.div`
  font-weight: bold;
`;

const Value = styled.div`
  color: "#5B5B5B";
`;

const Space = styled.div`
  margin-top: 12px;
`;

export default WeatherInfo;
