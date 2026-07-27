export const DropDown = ({sortOptions, setSortBy, sortBy}) => {
  return (
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      {sortOptions?.map((option) => {
        return (
          <option value={option.value} key={option.id}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
