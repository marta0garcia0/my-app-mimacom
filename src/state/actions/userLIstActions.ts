import { User, UserLogin, UserUpdate } from '../../models/user';
import { deleteUser, getUserById, getUsers, login as apiLogin, updateUser } from '../../services/api';
import { ApiData } from '../../models/apiData';

//Action Types
export const ADD_USER_LIST = 'ADD_USER_LIST';
export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const SET_USER = 'SET_USER';

export const SET_USER_LIST = 'SET_USER_LIST';
export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS';
export const ADD_USERS_STARTED = 'ADD_USERS_STARTED';
export const GET_USER_STARTED = 'GET_USER_STARTED';
export const ADD_USERS_FAILURE = 'ADD_USERS_FAILURE';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const USER_LOGGED_SUCCESS = 'USER_LOGGED_SUCCESS';
export const USER_LOGGED_FAILURE = 'USER_LOGGED_FAILURE';
export const USER_UPDATED_SUCCESS = 'USER_UPDATED_SUCCESS';
export const USER_UPDATED_FAILURE = 'USER_UPDATED_FAILURE';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
});

const setUsers = (users: User[], page: number | null) => ({
  type: SET_USER_LIST,
  payload: { users, page }
});

const addUsersSuccess = (apiData: ApiData) => ({
  type: ADD_USERS_SUCCESS,
  payload: {
    ...apiData
  }
});

const getUserSuccess = (data: User) => ({
  type: GET_USER_SUCCESS,
  payload: data
});

const addUsersStarted = () => ({
  type: ADD_USERS_STARTED
});

const getUserStarted = () => ({
  type: GET_USER_STARTED
});

const addUsersFailure = (error: any) => ({
  type: ADD_USERS_FAILURE,
  payload: {
    error
  }
});

const userLoggedSuccess = (res: {token: string}) => ({
  type: USER_LOGGED_SUCCESS,
  payload: {
    token: res.token
  }
});

const userLoggedFailure = (error: any) => ({
  type: ADD_USERS_FAILURE,
  payload: {
    error
  }
});

const userUpdatedSuccess = (res: any) => ({
  type: USER_UPDATED_SUCCESS,
  payload: res
});

const userUpdatedFailure = (error: any) => ({
  type: USER_UPDATED_FAILURE,
  payload: {
    error
  }
});

const deleteUserSuccess = (res: any) => ({
  type: DELETE_USER_SUCCESS,
  payload: res
});

const deleteUserFailure = (error: any) => ({
  type: DELETE_USER_FAILURE,
  payload: {
    error
  }
});

const setLoggedUser = (res: UserLogin) => ({
  type: SET_LOGGED_USER,
  payload: res
});

export const addUsers = (page: number, perPage?: number) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(addUsersStarted());
    getUsers(page, perPage)
      .then((res: ApiData) => {
        dispatch(addUsersSuccess(res));
        dispatch(setUsers(res.data, page));
      })
      .catch((err) => {
        dispatch(addUsersFailure(err.message));
      });
  };

export const login = (user: UserLogin) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    apiLogin(user)
      .then((res: any) => {
        dispatch(userLoggedSuccess(res));
        dispatch(setLoggedUser(user));
      })
      .catch((err) => {
        dispatch(userLoggedFailure(err.message));
      });
  };

export const setUserData = (id: number, user: UserUpdate) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    updateUser(id, user)
      .then((res: any) => {
        dispatch(userUpdatedSuccess(res));
      })
      .catch((err) => {
        dispatch(userUpdatedFailure(err.message));
      });
  };

export const setDeleteUser = (id: number) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    deleteUser(id)
      .then((res: any) => {
        dispatch(deleteUserSuccess(res));
      })
      .catch((err) => {
        dispatch(deleteUserFailure(err.message));
      });
  };

export const getUser = (id: number) =>
  (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(getUserStarted());
    getUserById(id)
      .then((user: User) => {
        dispatch(getUserSuccess(user));
        dispatch(setUser(user));
      })
      .catch((err) => {
        dispatch(addUsersFailure(err.message));
      });
  };
