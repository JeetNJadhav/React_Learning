export const FilterUsers = ({ filteredData }) => {
  return (
    <div>
      {filteredData?.map((user) => {
        return (
          <div
            key={user.id}
          >{`${user.id}  -  ${user.firstName} ${user.lastName} `}</div>
        );
      })}
    </div>
  );
};
