import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export const TodoInput = ({ onAdd }: Props) => {
  const [value, setValue] = useState<string>("");
  const handleSubmit = () =>{
    onAdd(value);
    setValue("");
  }
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
