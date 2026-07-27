export const sortUsers = (apiData, sortBy) => {
    const sortedUsers = [...apiData];    
    if(sortBy === "ascFn") return sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
    if(sortBy === "dscFn") return sortedUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
    return sortedUsers;
}