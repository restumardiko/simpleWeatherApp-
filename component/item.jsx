export function Item({ data }) {
  console.log(data);
  if (data.cod === 200) {
    return (
      <div className="item">
        <p className="item1">kota : {data.name}</p>
        <p className="item1"> {data.weather[0].main}</p>
        <p className="item2">suhu : {data.main.temp}℃</p>
        <p className="item3">kelembaban : {data.main.humidity} %</p>
        <p className="item4">tekanan udara : {data.main.pressure} hPa</p>
        <p className="item4">kecepatan angin : {data.wind.speed} m/s</p>
        <p className="item4">jarak pandang : {data.visibility} meter</p>
      </div>
    );
  } else if (data === 400) {
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
