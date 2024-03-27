/* eslint-disable react/prop-types */
import { Item } from "./item";

function Result({ data }) {
  return (
    <div className="result">
      <Item data={data} />
    </div>
  );
}
export default Result;
