export interface weatherValueTransmittal {
  status: string;
  message: string;
  data?: weatherValue;
}

export interface weatherValue {
  city: string;
  condition: string;
  description: string;
  temperature: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
  visibility: string;
}
export interface mappedWeather {
  type: string;
  city?: string;
  condition?: string;
  description?: string;
  temperature?: string;
  humidity?: string;
  pressure?: string;
  windSpeed?: string;
  visibility?: string;
}
export default function getWeatherValue(
  weather: mappedWeather,
): weatherValueTransmittal {
  if (weather.type === "NOT_FOUND") {
    return {
      status: "error",
      message: "city not found !",
    };
  }
  if (weather.type === "SUCCESS") {
    return {
      status: "ok",
      message: "success",
      data: {
        city: weather.city ?? "",
        condition: weather.condition ?? "",
        description: weather.description ?? "",
        temperature: weather.temperature ?? "",
        humidity: weather.humidity ?? "",
        pressure: weather.pressure ?? "",
        windSpeed: weather.windSpeed ?? "",
        visibility: weather.visibility ?? "",
      },
    };
  }
  return {
    status: "error",
    message: "network error",
  };
}
