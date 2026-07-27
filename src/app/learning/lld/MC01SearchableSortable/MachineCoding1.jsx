import { useEffect, useMemo, useState } from "react";
import { fetchUsersData } from "./utils/utils";
import { FilterUsers } from "./components/UserList";
import { DropDown } from "./components/DropDownSort";
import { UsersSearch } from "./components/UsersSearch";
import { Introduction } from "./components/Introduction";
import { useFilteredData } from "./hooks/useFilteredData";
import { sortOptions } from "./data/data";
import { Pagination } from "./components/Pagination";

const MachineCoding1 = () => {
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [sortBy, setSortBy] = useState(sortOptions[0].value);
  const [currentPage, setCurrentPage] = useState(1);

  const [states, setStates] = useState({
    loading: true,
    error: null,
  });

  const limit = 5;

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsersData();
        setApiData(data);
      } catch (error) {
        setStates((prev) => {
          return { ...prev, error: error };
        });
      } finally {
        setStates((prev) => {
          return { ...prev, loading: false };
        });
      }
    };

    loadUsers();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, searchData]);

  const filteredData = useFilteredData(searchData, apiData, sortBy);
  const start = (currentPage - 1) * limit;
  const paginatedData = filteredData.slice(start, start + limit);

  const renderUsers = () => {
    if (states.loading) {
      return <>Loading ...</>;
    }

    if (states.error) {
      return <p>{states.error}</p>;
    }

    if (paginatedData.length === 0) {
      return <p>No users found.</p>;
    }

    return <FilterUsers filteredData={paginatedData} />;
  };

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

      <>{renderUsers()}</>

      <Pagination
        totalUsers={filteredData.length}
        limit={limit}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MachineCoding1;
