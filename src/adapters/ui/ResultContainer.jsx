import Result from "./result";

function ResultContainer({ weather }) {
  return (
    <div className="result-container">
      <Result weather={weather} />
    </div>
  );
}
export default ResultContainer;
