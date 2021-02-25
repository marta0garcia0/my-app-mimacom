import { UserLogin, UserUpdate, User } from '../models/user';
import { ApiData } from '../models/apiData';

const API_URL = 'https://reqres.in/api/';

const getUsers = (page: number = 1, perPage: number = 6): Promise<ApiData> =>
  fetch(`${API_URL}users?page=${page}&per_page=${perPage}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const dataParsed: User[] = data.data.map((user: any) => {
        return { ...user, firstName: user.first_name, lastName: user.last_name };
      });
      return { ...data, data: dataParsed };
    });

const login = (user: UserLogin): Promise<UserLogin> =>
  fetch(`${API_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    cache: 'no-cache'
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

const getUserById = (id: number): Promise<User> =>
  fetch(`${API_URL}users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const dataParsed: User = { ...data.data, firstName: data.data.first_name, lastName: data.data.last_name };
      return dataParsed;
    });

const updateUser = (id: number, user: UserUpdate): Promise<User> =>
  fetch(`${API_URL}users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    cache: 'no-cache'
  })
    .then((response) => response.json())
    .then((data) => {
      const dataParsed: User = { ...data, firstName: data.first_name, lastName: data.last_name };
      return dataParsed;
    });

const deleteUser = (id: number): Promise<User> =>
  fetch(`${API_URL}users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  }).then((response) => response.json());

export { getUsers, getUserById, updateUser, deleteUser, login };
