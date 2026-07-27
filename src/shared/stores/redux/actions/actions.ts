import axios from "axios";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  type UserActionTypes,
  type User,

} from "../types";
import type { Dispatch } from "redux";

export const fetchUsers = () => async (
  dispatch: Dispatch<UserActionTypes>
): Promise<void> => {

  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: response.data
    });

  } catch (error: any) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: error.message
    });
  }
};