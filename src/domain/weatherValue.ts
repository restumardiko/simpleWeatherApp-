export default function getWeatherValue(weatherData) {
  if (weatherData.type === "NOT_FOUND") {
    return {
      status: "error",
      message: "city not found !",
      data: {},
    };
  }
  if (weatherData.type === "SUCCESS") {
    return {
      status: "ok",
      message: "success",
      data: {
        city: weatherData.city,
        condition: weatherData.condition,
        temperature: weatherData.temperature,
        humidity: weatherData.humidity,
        pressure: weatherData.pressure,
        windSpeed: weatherData.windSpeed,
        visibility: weatherData.visibility,
      },
    };
  }
  return {
    status: "error",
    message: "network error",
    data: {},
  };
}
