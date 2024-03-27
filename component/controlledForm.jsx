import { useState } from "react";

function Form({ handle }) {
  const [isi, setIsi] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setIsi(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    handle(isi);
  };
  return (
    <div className="form">
      <div>
        <h1> Lemme forecast your location !</h1>
        <form onSubmit={handleClick}>
          <input id="name" type="text" required onChange={handleChange} />
          <br />

          <button type="submit">search</button>
        </form>
      </div>
    </div>
  );
}
export default Form;
