import type { weatherValueTransmittal } from "../../domain/weatherValue.ts";
import Result from "./result.js";

export function ResultContainer({
  weather,
}: {
  weather: weatherValueTransmittal;
}) {
  return (
    <div className="result-container">
      <Result weather={weather} />
    </div>
  );
}
export default ResultContainer;
