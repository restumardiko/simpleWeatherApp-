/* eslint-disable react/prop-types */

function Result({ weather }) {
  console.log("ini weather di result jsx", weather);
  if (Object.keys(weather)) {
    return (
      <>
        <p>mau cari kota apa ?</p>
      </>
    );
  }

  return (
    <div className="result">
      <p className="item city"> {weather.weatherValue.city}</p>
      <p className="item condition"> {weather.weatherValue.condition}</p>
      <p className="item temp">suhu : {weather.weatherValue.temperature}℃</p>
      <p className="item humidity">
        kelembaban :{weather.weatherValue.humidity} %
      </p>
      <p className="item pressure">
        tekanan udara : {weather.weatherValue.pressure} hPa
      </p>
      <p className="item windSpeed">
        kecepatan angin : {weather.weatherValue.windSpeed} m/s
      </p>
      <p className="item visibility">
        jarak pandang : {weather.weatherValue.visibility} meter
      </p>
    </div>
  );
}
export default Result;
