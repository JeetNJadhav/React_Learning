import { FILTERS } from "../constants";
import type { Filters } from "../Types";

type Props = {
	onChange: (filter: Filters) => void
	activeFilter: Filters
}

export const FilteredTodo = ({activeFilter, onChange}: Props) => {
  return (
    <div>
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          disabled={activeFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// {/* <select>
//         {FILTERS.map((filters) => (
//           <option>{filters}</option>
//         ))}
//       </select> */}
