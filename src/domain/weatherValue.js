export default function getWeatherValue(weatherData) {
  //this contain value from raw data
  const city = weatherData.name;
  const condition = weatherData.weather[0].main;
  const temperature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const pressure = weatherData.main.pressure;
  const windSpeed = weatherData.wind.speed;
  const visibility = weatherData.visibility;

  return {
    city: city,
    condition: condition,
    temperature: temperature,
    humidity: humidity,
    pressure: pressure,
    windSpeed: windSpeed,
    visibility: visibility,
  };
}
