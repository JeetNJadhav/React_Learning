import { useState } from "react";

export const DynamicInput = () => {
  const [val, setVal] = useState("");
  //   const [fields, setFields] = useState([]);
  const [inputs, setInputs] = useState([]);

  const handleChange = (e) => {
    setVal(e.target.value);
    setInputs(Array(Number(e.target.value)).fill(""));
  };

  const handleInputChange = (index, value) => {
    // create new array because for react to re-render it checks references (Shallow copy)
    // same array same referrence even though value changes it wont re-render

    const copy = [...inputs];
    copy[index] = value;

    setInputs(copy);
  };

  const handleSubmit = () => {
    alert(JSON.stringify(inputs));
  };

  return (
    <>
      <input type="Number" value={val} onChange={(e) => handleChange(e)} />

      <div>
        {inputs.map((item, idx) => {
          return (
            <div key={idx}>
              <input
                type="text"
                value={item}
                onChange={(e) => handleInputChange(idx, e.target.value)}
              />
            </div>
          );
        })}

        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};
