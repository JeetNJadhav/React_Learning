import { useEffect, useMemo, useState } from "react";
import { fetchUsersData } from "./utils/utils";
import { FilterUsers } from "./UserList";
import { DropDown } from "./DropDownSort";
import { UsersSearch } from "./UsersSearch";
import { Introduction } from "./Introduction";
import { useFilteredData } from "./hooks/useFilteredData";
import { sortOptions } from "./data/data";

const MachineCoding1 = () => {
  const [apiData, setApiData] = useState();
  const [searchData, setSearchData] = useState("");
  const [sortBy, setSortBy] = useState(sortOptions[0].value);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsersData();
      setApiData(data);
    };

    loadUsers();
  }, []);

  const filteredData = useFilteredData(searchData, apiData, sortBy)

  return (
    <div>
      <Introduction />

      <h3>
        <UsersSearch setSearchData={setSearchData} />
        <DropDown
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOptions={sortOptions}
        />
      </h3>

      <FilterUsers filteredData={filteredData} />
    </div>
  );
};

export default MachineCoding1;

