import mappingTheWeatherRepo from "../adapters/mappers/weatherMapper.js";
import getBackground from "../domain/background.js";
import getWeatherValue from "../domain/weatherValue.js";

type GetWeatherRepoFn = (city: string) => Promise<any>;

export default async function getWeatherUseCase(
  city: string,
  getWeatherRepo: GetWeatherRepoFn,
): Promise<object> {
  const data = await getWeatherRepo(city);

  const mappedData = mappingTheWeatherRepo(data);

  const weatherValue = getWeatherValue(mappedData);

  const background = getBackground(mappedData);

  return { weatherValue, background };
}
