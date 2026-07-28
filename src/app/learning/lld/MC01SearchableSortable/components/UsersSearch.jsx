export const UsersSearch = ({ setSearchData }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Seacrh users..."
        onChange={(e) => setSearchData(e.target.value)}
        className="searchInput"
      />
    </>
  );
};
