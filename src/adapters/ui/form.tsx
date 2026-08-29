import { useState, type ChangeEvent, type FormEvent } from "react";

type FormProps = {
  handleSearch: (value: string) => void;
};

export function Form({ handleSearch }: FormProps) {
  const [isi, setIsi] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsi(value);
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(isi.trim());
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
