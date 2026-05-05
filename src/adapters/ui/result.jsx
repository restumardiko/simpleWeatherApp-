/* eslint-disable react/prop-types */

function Result({ weather }) {
  if (weather.message === "network error") {
    return (
      <>
        <h3>please check your connection!</h3>
      </>
    );
  }
  if (weather.message === "city not found !") {
    return (
      <>
        <h3>City not found!</h3>
      </>
    );
  }

  return (
    <div className="result">
      <p className="item city"> {weather.data.city}</p>
      <p className="item condition"> {weather.data.condition}</p>
      <p className="item temp">suhu : {weather.data.temperature}℃</p>
      <p className="item humidity">kelembaban :{weather.data.humidity} %</p>
      <p className="item pressure">
        tekanan udara : {weather.data.pressure} hPa
      </p>
      <p className="item windSpeed">
        kecepatan angin : {weather.data.windSpeed} m/s
      </p>
      <p className="item visibility">
        jarak pandang : {weather.data.visibility} meter
      </p>
    </div>
  );
}
export default Result;
