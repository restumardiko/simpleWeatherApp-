export default function getWeatherCondition(weatherData) {
  if (weatherData.includes("Rain")) return "Rain";
  if (weatherData.includes("Haze")) return "Haze";
  if (weatherData.includes("Clouds")) return "Clouds";
  if (weatherData.includes("Mist")) return "Mist";
  if (weatherData.includes("Clear")) return "Clear";
  return "Unknown";
}
