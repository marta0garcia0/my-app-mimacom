import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import './Login.scss';
import { User } from '../../models/user';
import PaginationContainer from '../../components/pagination/PaginationContainer';
import { Button, GlobalStyle, List, Title } from '../../App';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 400px);
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

interface Props {
  onLogin: Function;
  setToken: Function;
  users: User[];
}

function Login(props: Props) {
  const [loggedUser, setLoggedUser] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onLogin(loggedUser);
    props.setToken();

  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = (e.target);
    setLoggedUser({ ...loggedUser, [name]: value });
  };
  return (
    <>
      <GlobalStyle />
      <List>
        <div>
          <Title>Select one of the available users:</Title>
          {props.users && Array.from(props.users).map((user: any) =>
            <div key={user.id} onClick={() => setLoggedUser({ ...loggedUser, email: user.email })}>{user.email}</div>)}
          <PaginationContainer />
        </div>
      </List>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Title>Login:</Title>
          <Input
            type='email'
            name='email'
            value={loggedUser.email}
            onChange={handleChange}
          />
          <Input
            type='password'
            name='password'
            value={loggedUser.password}
            onChange={handleChange}
          />
          <Button>Entrar</Button>
        </Form>
      </Wrapper>
    </>
  );
}

export default Login;
