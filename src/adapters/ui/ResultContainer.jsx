import Result from "./result";

function ResultContainer({ weather }) {
  console.log("in", weather);
  return (
    <div className="result-container">
      <Result weather={weather} />
    </div>
  );
}
export default ResultContainer;
