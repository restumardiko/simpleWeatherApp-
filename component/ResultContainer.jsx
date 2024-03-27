import { useState } from "react";
import Icon from "./icon";
import Result from "./result";

function ResultContainer({ data }) {
  console.log(data);
  return (
    <div className="result-container">
      <Icon />
      <Result data={data} />
    </div>
  );
}
export default ResultContainer;
