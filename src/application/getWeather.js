import mappingTheWeatherRepo from "../adapters/mappers/weatherMapper";
import getBackground from "../domain/background";
import getWeatherCondition from "../domain/weatherCondition";
import getWeatherValue from "../domain/weatherValue";

export default async function getWeatherUseCase(city, getWeatherRepo) {
  const data = await getWeatherRepo(city);

  const mappedData = mappingTheWeatherRepo(data);

  const weatherValue = getWeatherValue(mappedData);

  const condition = getWeatherCondition(mappedData);

  const background = getBackground(condition);

  return { weatherValue, background };
}
