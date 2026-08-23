const apiKey = (import.meta as ImportMeta & {
  env: { VITE_WEATHER_API_KEY: string };
}).env.VITE_WEATHER_API_KEY;

export default async function getWeatherRepo(city: string) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
}
