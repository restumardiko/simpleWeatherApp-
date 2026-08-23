import type { mappedWeather } from "./weatherValue.js";

export default function getBackground(weather: mappedWeather): string {
  if (weather.type !== "SUCCESS") {
    return "Default";
  } else {
    return weather.condition ?? "Default";
  }
}
