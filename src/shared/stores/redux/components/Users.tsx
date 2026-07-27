import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/actions";
import type { RootState } from "../store/store";
// import { fetchUsers } from "./actions";
// import { RootState } from "./store";

// Component mounts
//       ↓
// dispatch(fetchUsers())
//       ↓
// Thunk function runs
//       ↓
// API call using axios
//       ↓
// Dispatch success action
//       ↓
// Reducer updates store
//       ↓
// React re-renders UI


const Users = () => {

  const dispatch = useDispatch<any>(); // quick fix for thunk

  const { users, loading, error } = useSelector(
    (state: RootState) => state
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Users List</h2>

      {users.map((user:any) => (
        <div key={user.id}>
          {user.name} - {user.email}
        </div>
      ))}

    </div>
  );
};

export default Users;