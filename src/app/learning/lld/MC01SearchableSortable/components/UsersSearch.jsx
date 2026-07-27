export const UsersSearch = ({setSearchData}) => {
  return (
    <>
      Users:{" "}
      <input
        type="text"
        placeholder="Seacrh users..."
        onChange={(e) => setSearchData(e.target.value)}
      />
    </>
  );
};
