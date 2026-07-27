export const filterUsers = (users, searchData) => {
  return users?.filter((user) => {
    return (
      user.firstName.toLowerCase().includes(searchData.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchData.toLowerCase())
    );
  });
};
