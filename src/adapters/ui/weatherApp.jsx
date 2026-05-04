import { useState } from "react";

import "../../../App.css";
import getWeatherUseCase from "../../application/getWeather";

import getWeatherRepo from "../repositories/weatherAPi";
import ResultContainer from "./ResultContainer";
import SearchContainer from "./SearchContainer";

// eslint-disable-next-line no-undef

function WeatherApp() {
  const [weather, setWeather] = useState({
    background: "",
    weatherValue: null,
  });

  const handleSearch = async (city) => {
    try {
      const weatherUseCase = await getWeatherUseCase(city, getWeatherRepo);

      setWeather(weatherUseCase);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const backgroundClass = weather.background
    ? `${weather.background}`
    : "default";

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
