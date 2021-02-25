import React, { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../models/user';
import { withRouter, useLocation } from 'react-router-dom';
import { Button, GlobalStyle, Title } from '../../App';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 14px;
  width: 150px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const List = styled.div`
  display: block;
  width: 100%;
  div {
    padding: 0;
    background: #f2f2f2;
    width: 320px;
    margin: 0 auto;
    h2 {
      background: #f2f2f2;
      padding: 5px;
    }
    div {
      width: 300px;
    }
}
`;

interface Props {
  selectedUser: User;
  history: any;
  onGetUser: Function;
  onUpdateUser: Function;
  onDeleteUser: Function;
}

function UserPage(props: Props) {
  const handleClick = () => {
    props.history.push('/');
  };
  const user = props && props.selectedUser;
  const location = useLocation();
  const [modifiedUser, setModifiedUser] = useState(props.selectedUser);

  useEffect(() => {
    const id = parseInt(location.pathname.replace('/user/', ''), 10);
    if (!props.selectedUser || id !== props.selectedUser.id) {
      props.onGetUser(id);
    }
    if (props.selectedUser && modifiedUser && modifiedUser.id !== props.selectedUser.id) {
      setModifiedUser(props.selectedUser);
    }
  });

  function handleDelete(id: number) {
    props.onDeleteUser(id);
    props.history.push('/');
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>, key: string) {
    const userModified = { ...modifiedUser, [key]: e.target.value };
    setModifiedUser(userModified);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const userSubmit = {
      ...modifiedUser,
      'first_name': modifiedUser.firstName,
      'last_name': modifiedUser.lastName
    };
    props.onUpdateUser(modifiedUser.id, userSubmit);
  }
  return (
    <>
      <GlobalStyle />
      {user ?
        <List key={user.id}>
          <Button style={{ margin: '30px' }} value='Back' onClick={handleClick}>Back</Button>
          <div>
            { modifiedUser ?
              <div>
                <Title>User: {props.selectedUser.firstName} {props.selectedUser.lastName}</Title>
                <img key={modifiedUser.id}
                  src={modifiedUser.avatar} width={100}/>
                <Form onSubmit={handleSubmit}>
                  <div>
                    <label>First name</label>
                    <Input type='text' value={modifiedUser.firstName} name='firstName'
                      onChange={(e) => handleChange(e, 'firstName')}
                    />
                  </div>
                  <div>
                    <label>Last name</label>
                    <Input type='text' value={modifiedUser.lastName} name='lastName'
                      onChange={(e) => handleChange(e, 'lastName')}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <Input type='email' value={modifiedUser.email} name='email'
                      onChange={(e) => handleChange(e, 'email')}
                    />
                  </div>
                  <div>
                    <label>Avatar</label>
                    <Input type='text' value={modifiedUser.avatar} name='avatar'
                      onChange={(e) => handleChange(e, 'avatar')}
                    />
                  </div>
                  <Button type='submit' style={{ width: '300px' }}>Submit</Button>
                </Form>
                <Button onClick={() => handleDelete(modifiedUser.id)} style={{ width: '300px' }}>Delete user</Button>
              </div>
              : ''
            }
          </div>
        </List>
        : ''
      }
    </>
  );
}

export default withRouter<any, any>(UserPage);
