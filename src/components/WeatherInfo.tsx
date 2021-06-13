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
            <KeyValueContainer>
              <Key>Name:&nbsp;</Key>
              <Value>{data.location.name}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Country:&nbsp;</Key>
              <Value>{data.location.country}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Local Time:&nbsp;</Key>
              <Value>{data.location.localtime}</Value>
            </KeyValueContainer>
          </LocationInformation>
          <Space />
          <CurrentInformation>
            <KeyValueContainer>
              <Key>Temperature:&nbsp;</Key>
              <Value>{data.current.temp_c}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Condition:&nbsp;</Key>
              <Value>{data.current.condition.text}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Wind(kph):&nbsp;</Key>
              <Value>{data.current.wind_kph}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Precipitation(mm):&nbsp;</Key>
              <Value>{data.current.precip_mm}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Humidity:&nbsp;</Key>
              <Value>{data.current.humidity}</Value>
            </KeyValueContainer>
            <KeyValueContainer>
              <Key>Feels like:&nbsp;</Key>
              <Value>{data.current.feelslike_c}</Value>
            </KeyValueContainer>
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

const KeyValueContainer = styled.div`
  display: flex;
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
