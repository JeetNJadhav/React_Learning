import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReducer from "../reducers/reducers";


const store = createStore(
  userReducer,
  applyMiddleware(thunk)
);

export default store;

// RootState type (important for useSelector)
export type RootState = ReturnType<typeof userReducer>;