/* eslint-disable react/prop-types */

function Result({ weather }) {
  if (weather === undefined) {
    return (
      <>
        <p>mau cari kota apa ?</p>
      </>
    );
  }
  if (weather.message === "city not found !") {
    return (
      <>
        <p>City not found!</p>
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
