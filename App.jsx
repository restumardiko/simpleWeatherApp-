import { useState, useEffect, useRef } from "react";

import SearchContainer from "./component/SearchContainer";
import ResultContainer from "./component/ResultContainer";
import "./App.css";
// eslint-disable-next-line no-undef
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const container = useRef(null);
  const [state, setState] = useState("");

  const handleFetch = (ab) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ab}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        setState(error);
      });
  };

  useEffect(() => {
    // console.log(state.weather[0].main);
    if (state && state.cod === 200) {
      container.current.setAttribute("id", state.weather[0].main);
    }
  }, [state]);

  return (
    <div className="weather-app" ref={container}>
      <SearchContainer fetching={handleFetch} />
      <ResultContainer data={state} />
    </div>
  );
}

export default App;
