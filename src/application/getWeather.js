import mappingTheWeatherRepo from "../adapters/mappers/weatherMapper";
import getBackground from "../domain/background";
import getWeatherCondition from "../domain/weatherCondition";
import getWeatherValue from "../domain/weatherValue";

export default async function getWeatherUseCase(city, getWeatherRepo) {
  //ambil data dari api
  const data = await getWeatherRepo(city);
  //mapper
  const mappedData = mappingTheWeatherRepo(data);
  //tentukan weather value
  const weatherValue = getWeatherValue(mappedData);
  //tentukan kondisi weather
  const condition = getWeatherCondition(mappedData);
  //tentukan background
  const background = getBackground(condition);
  //update data ke UI
  return { weatherValue, background };
}
