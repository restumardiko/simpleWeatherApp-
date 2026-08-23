type fetchedWeather =
  | { type: "NETWORK_MIGHT_ERROR" }
  | { type: "SUCCESS"; [key: string]: unknown }
  | { type: "NOT_FOUND" }
  | { type: "UNKNOWN_ERROR" };

export default function mappingTheWeatherRepo(
  weatherRepo: any,
): fetchedWeather {
  if (weatherRepo === undefined) {
    return { type: "NETWORK_MIGHT_ERROR" };
  }
  if (weatherRepo.cod === 200) {
    return {
      type: "SUCCESS",
      city: weatherRepo.name,
      condition: weatherRepo.weather[0].main,
      description: weatherRepo.weather[0].description,
      temperature: weatherRepo.main.temp,
      humidity: weatherRepo.main.humidity,
      pressure: weatherRepo.main.pressure,
      windSpeed: weatherRepo.wind.speed,
      visibility: weatherRepo.visibility,
    };
  }
  if (weatherRepo.cod === "404") {
    return {
      type: "NOT_FOUND",
    };
  }
  return { type: "UNKNOWN_ERROR" };
}
