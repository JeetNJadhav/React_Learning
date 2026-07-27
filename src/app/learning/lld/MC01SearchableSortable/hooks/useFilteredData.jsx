import { useMemo } from "react";
import { filterUsers } from "../utils/FilterUsers";
import { sortUsers } from "../utils/SortUsers";

export const useFilteredData = (searchData, apiData, sortBy) => {
  const filteredData = useMemo(() => {
    if (!apiData) return [];

    // const filtered = filterUsers(apiData, searchData);
    let filtered = apiData;

    if (searchData.trim()) {
      filtered = apiData.filter((user) => {
        return (
          user.firstName.toLowerCase().includes(searchData.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchData.toLowerCase())
        );
      });
    }

    return sortUsers(filtered, sortBy);
  }, [searchData, apiData, sortBy]);

  return filteredData;
};

// without useMemo
// let filteredData = apiData;

// filteredData = apiData?.filter((user) => {
//   return (
//     user.firstName.toLowerCase().includes(searchData.toLowerCase()) ||
//     user.lastName.toLowerCase().includes(searchData.toLowerCase())
//   );
// });
