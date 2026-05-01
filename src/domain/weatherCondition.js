export default function getWeatherCondition(weatherData) {
  if (weatherData.type === "SUCCESS") {
    return weatherData.condition;
  }
  return;
}
