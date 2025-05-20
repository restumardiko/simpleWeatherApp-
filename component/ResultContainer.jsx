import Result from "./result";

function ResultContainer({ data }) {
  return (
    <div className="result-container">
      <Result data={data} />
    </div>
  );
}
export default ResultContainer;
