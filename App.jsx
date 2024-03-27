import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import SearchContainer from "./component/SearchContainer";
import ResultContainer from "./component/ResultContainer";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const handleFetch = (ab) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ab},&APPID=5f1c32d0fe52ed132ff14da315111286&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setState(data);
      })
      .catch((error) => {
        console.log(error);
        setState(error);
      });
  };

  return (
    <div className="weather-app">
      <SearchContainer fetching={handleFetch} />
      <ResultContainer data={state} />
    </div>
  );
}

export default App;
