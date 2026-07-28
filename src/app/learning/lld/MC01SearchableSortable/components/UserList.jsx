export const FilterUsers = ({ filteredData }) => {
  return (
    <div className="userList">
      {filteredData?.map((user) => {
        return (
          <div
            className="userCard"
            key={user.id}
          >{`${user.id}  -  ${user.firstName} ${user.lastName} `}</div>
        );
      })}
    </div>
  );
};
