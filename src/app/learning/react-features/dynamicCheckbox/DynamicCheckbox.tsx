import { useCallback, useMemo, useState } from "react";
import { Checkbox } from "../../../../shared/components/Checkbox";


const data = [
  {
    id: 1,
    label: "checkbox 1",
    checked: false,
  },
  {
    id: 2,
    label: "checkbox 2",
    checked: false,
  },
  {
    id: 3,
    label: "checkbox 3",
    checked: false,
  },
  {
    id: 4,
    label: "checkbox 4",
    checked: false,
  },
];


type CheckboxItem = {
  id: number;
  label: string;
  checked: boolean;
};

export const DynamicCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(data);

  const handleCheckboxChange = useCallback((id: number) => {
    setCheckboxes((prev) => 
        prev.map((cb) => cb.id === id ? {...cb, checked: !cb.checked} : cb)
    )
  },[]);

  const allChecked = useMemo(() => checkboxes.every((cb) => (cb.checked)), [checkboxes])
  // const allChecked = checkboxes.every((cb) => (cb.checked))

  const handleSelectAll = () => {
    setCheckboxes((prev) => prev.map((cb) => ({...cb, checked: true})))
  }

  const selected = useMemo(() => checkboxes.filter((cb) => cb.checked), [checkboxes])
  // const selected = checkboxes.filter((cb) => cb.checked)

  return (
    <div>
      {checkboxes.map((cb) => (
        <Checkbox
          key={cb.id}
          label={cb.label}
          checked={cb.checked}
          onChange={() => handleCheckboxChange(cb.id)}
        />
      ))}

      <button onClick={handleSelectAll} disabled={allChecked}>
        Select All
      </button>

      <p>Selected Count: {selected.length}</p>
      <p>
        Selected Items:{" "}
        {selected.map((cb) => cb.label).join(", ") || "None"}
      </p>
    </div>
  );
};
