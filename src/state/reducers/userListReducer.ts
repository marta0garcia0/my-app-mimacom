// import { Message } from '../../models/message';
import { User } from '../../models/user';
import { ADD_USERS_SUCCESS, SET_USER, SET_LOGGED_USER, ADD_USER_LIST, SET_USER_LIST, USER_LOGGED_SUCCESS, USER_LOGGED_FAILURE, USER_UPDATED_SUCCESS, DELETE_USER_SUCCESS, GET_USER_SUCCESS } from '../actions/userLIstActions';
import { ApiData } from '../../models/apiData';

export interface State {
  selectedUser: User | null,
  loggedUser: User | null,
  users: User[],
  usersApiData: ApiData | null,
  token: {
    token: string | null,
  }
}

type Action = {
  type: string;
  payload: any;
}

const initialState = {
  usersApiData: null,
  selectedUser: null,
  loggedUser: null,
  users: [],
  token: {
    token: null,
  }
};

const userListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
  case SET_LOGGED_USER:
    return { ...state, loggedUser: state && state.users &&
      state.users.find((user) => user.email === action.payload.email) };
  case ADD_USER_LIST:
    return { ...state, users: state.users.concat(action.payload) };
  case SET_USER_LIST:
    return { ...state, users: state && state.usersApiData && action.payload.page === state.usersApiData.page + 1 ?
      state.users.concat(action.payload.users): action.payload.users };
  case SET_USER:
    return { ...state, selectedUser: action.payload };
  case GET_USER_SUCCESS:
    return { ...state, selectedUser: action.payload };
  case ADD_USERS_SUCCESS:
    return { ...state, usersApiData: action.payload };
  case USER_LOGGED_SUCCESS:
    return { ...state, token: action.payload };
  case USER_LOGGED_FAILURE:
    return { ...state, token: null };
  case USER_UPDATED_SUCCESS:
    return { ...state, selectedUser: action.payload };
  case DELETE_USER_SUCCESS:
    return { ...state, selectedUser: null };
  default:
    return state;
  }
};

export default userListReducer;
