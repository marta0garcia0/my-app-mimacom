import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { User } from './models/user';
import './App.scss';
import React, { useEffect, useState } from 'react';
import LoginContainer from './pages/login/LoginContainer';
import { store } from './state/store';
import HomeContainer from './pages/home/HomeContainer';
import UserContainer from './pages/user/UserContainer';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
  }
`;

export const Title = styled.h2`
font-weight: normal;
color: #2a2a29;
text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const List = styled.div`
display: block;
width: 100%;
div {
  padding: 20px;
  background: #f2f2f2;
  width: 300px;
  margin: 0 auto;
  div, h2 {
    background: #f2f2f2;
    padding: 5px;
    display: block;
  }
  div {
    cursor: pointer;
  }
}
`;
const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

const baseUrl: string = (document.getElementsByTagName('base')[0] || {}).href;

interface Props {
  onAddUsers: Function;
}

function App(props: Props) {
  const [token, setToken] = useState();
  const [users, setUsers] = useState<User[]>();
  props.onAddUsers();
  useEffect(() => {
    const usersStore = store.getState().users.users;
    if (usersStore && usersStore.length > 0 && JSON.stringify(usersStore) !== JSON.stringify(users)) {
      setUsers(usersStore);
    }
    if (token !== store.getState().users.token.token) {
      setToken(store.getState().users.token.token);
    }
  });
  if (!token) {
    return <BrowserRouter
      basename={baseUrl}>
      <LoginContainer setToken={setToken} />
    </BrowserRouter>;

  }
  return (
    <BrowserRouter
      basename={baseUrl}>
      <Route exact={true} path='/' component={HomeContainer} />
      <Route path='/user/:id' component={UserContainer} />
    </BrowserRouter>
  );
}

export default App;
