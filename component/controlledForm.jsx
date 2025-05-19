import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Form({ handle }) {
  const [isi, setIsi] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(isi);
    setIsi(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    handle(isi.trim());
  };
  return (
    <div className="form">
      <div>
        <h1 className="offering-text"> Lemme forecast your location !</h1>
        <form onSubmit={handleClick}>
          <input id="name" type="text" required onChange={handleChange} />
          <br />

          {/* <button type="submit">search</button> */}
        </form>
      </div>
    </div>
  );
}
export default Form;
