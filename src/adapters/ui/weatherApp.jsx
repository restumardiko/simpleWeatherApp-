import { useRef, useState } from "react";

import "../../../App.css";
import getWeatherUseCase from "../../application/getWeather";

import getWeatherRepo from "../repositories/weatherAPi";
import ResultContainer from "./ResultContainer";
import SearchContainer from "./SearchContainer";

// eslint-disable-next-line no-undef

function WeatherApp() {
  const container = useRef(null);
  const [weather, setWeather] = useState({});

  const handleSearch = async (city) => {
    try {
      const weatherUseCase = await getWeatherUseCase(city, getWeatherRepo);

      setWeather(weatherUseCase);
    } catch (error) {
      throw new error(error);
    }
  };

  return (
    <div className="weather-app" ref={container}>
      <SearchContainer handleSearch={handleSearch} />
      <ResultContainer weather={weather} />
    </div>
  );
}

export default WeatherApp;
