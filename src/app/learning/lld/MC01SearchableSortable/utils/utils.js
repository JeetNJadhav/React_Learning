export const fetchUsersData = async () => {
  const resp = await fetch("https://dummyjson.com/users");
  const data = await resp.json();  
  console.log(data.users);
  return data.users
};


// // GET
// const response = await fetch("/api/users");
// const data = await response.json();
// // POST
// const response = await fetch("/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "John",
//     age: 25,
//   }),
// });

// const data = await response.json();

// // GET
// const response = await axios.get("/api/users");
// const data = response.data;

// // POST
// const response = await axios.post("/api/users", {
//   name: "John",
//   age: 25,
// });

// const data = response.data;
