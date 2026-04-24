import getBackground from "../domain/background";
import getWeatherCondition from "../domain/weatherCondition";
import getWeatherValue from "../domain/weatherValue";

export default async function getWeatherUseCase(city, weatherRepo) {
  //ambil data dari api
  const data = await weatherRepo(city);
  //tentukan weather value
  const weatherValue = getWeatherValue(data);
  //tentukan kondisi weather
  const condition = getWeatherCondition(data);
  //tentukan background
  const background = getBackground(condition);
  //update data ke UI
  return { weatherValue, background };
}
