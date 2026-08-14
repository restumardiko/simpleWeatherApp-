export default function mappingTheWeatherRepo(weatherRepo) {
  if (weatherRepo === undefined) {
    return { type: "NETWORK_MIGHT_ERRROR" };
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
}
