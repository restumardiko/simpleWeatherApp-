export default function getWeatherCondition(weatherData) {
  console.log("ini weather data", weatherData);
  if (weatherData.type === "SUCCESS") {
    return weatherData.condition;
  }
  return;
}
