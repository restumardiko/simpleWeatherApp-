export function Item({ data }) {
  //console.log(data);
  if (data.cod === 200) {
    return (
      <div className="result">
        <p className="item a"> {data.name}</p>
        <p className="item b"> {data.weather[0].main}</p>
        <p className="item c">suhu : {data.main.temp}℃</p>
        <p className="item d">kelembaban : {data.main.humidity} %</p>
        <p className="item e">tekanan udara : {data.main.pressure} hPa</p>
        <p className="item f">kecepatan angin : {data.wind.speed} m/s</p>
        <p className="item g">jarak pandang : {data.visibility} meter</p>
      </div>
    );
  } else if (data.cod === 400) {
    return (
      <div className="item">
        <p>{data.message}</p>
      </div>
    );
  } else {
    return (
      <div className="item">
        <p> {data.message}</p>
      </div>
    );
  }
}
