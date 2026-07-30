export const Chip = ({ chips, setChips }) => {
  const removeChip = (chip) => {
    setChips((prev) => prev.filter((item) => item !== chip));
  };

  return chips.map((chip) => (
    <div className="chip" key={chip}>
      {chip}

      <button className="chipBtn" onClick={() => removeChip(chip)}>
        x
      </button>
    </div>
  ));
};
