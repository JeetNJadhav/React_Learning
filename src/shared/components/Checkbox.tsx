type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};


export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};