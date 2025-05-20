import { useState, useEffect, useRef } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import SearchContainer from "./component/SearchContainer";
import ResultContainer from "./component/ResultContainer";
import "./App.css";
const apiKey = process.env.appweatherkey;

function App() {
  const container = useRef(null);
  const [state, setState] = useState("");

  const handleFetch = (ab) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ab},&APPID=${apiKey}units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setState(data);
        console.log("heyuo");
      })
      .catch((error) => {
        console.log(error);
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
