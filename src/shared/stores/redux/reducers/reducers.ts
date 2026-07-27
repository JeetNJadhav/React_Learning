import {
  type UserState,
  type UserActionTypes,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "../types";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
};

const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {

  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;