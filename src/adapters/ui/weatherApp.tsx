import { useState } from "react";

import getWeatherUseCase from "../../application/getWeather.js";

import "../../../App.css";
import getWeatherRepo from "../repositories/weatherAPi.js";
import ResultContainer from "./ResultContainer.js";
import SearchContainer from "./SearchContainer.js";

// eslint-disable-next-line no-undef

type WeatherState = {
  background: string;
  weatherValue: any;
};

export function WeatherApp() {
  const [weather, setWeather] = useState<WeatherState>({
    background: "",
    weatherValue: null,
  });

  const handleSearch = async (city: string) => {
    try {
      const weatherUseCase = (await getWeatherUseCase(
        city,
        getWeatherRepo,
      )) as WeatherState;

      setWeather(weatherUseCase);
    } catch (error) {
      error;
    }
  };

  const backgroundClass = weather.background
    ? `${weather.background}`
    : "Default";

  return (
    <div className={`weather-app ${backgroundClass}`}>
      <SearchContainer handleSearch={handleSearch} />

      {weather.weatherValue && (
        <ResultContainer weather={weather.weatherValue} />
      )}
    </div>
  );
}

export default WeatherApp;
