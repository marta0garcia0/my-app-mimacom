import React from 'react';
import './Home.scss';
import { User } from '../../models/user';
import { withRouter } from 'react-router-dom';
import PaginationContainer from '../../components/pagination/PaginationContainer';
import { GlobalStyle, List, Title } from '../../App';
import styled from 'styled-components';

const Container = styled.div`
  span {
    background: lightblue !important;
    margin: 20px;
  }
  height: 60px;
  line-height: 50px;
  background: lightblue !important;
  margin: 10px !important;
  cursor: pointer;
  width: 240px !important;
`;
interface Props {
  users: User[];
  history: any;
  onGetUser: Function;
}

function Home(props: Props) {
  const handleClick = (user: User) => {
    props.onGetUser(user.id);
    props.history.push(`/user/${user.id}`);
  };

  return (
    <>
      <GlobalStyle />
      <List>
        <div>
          <Title>List of users, click to see detail:</Title>
          {props.users && props.users.map((user) => {
            return <Container key={user.id} onClick={() => handleClick(user)}>
              <img src={user.avatar} width={50}/>
              <span>{user.firstName} {user.lastName}</span>
            </Container>;
          })}
          <PaginationContainer />
        </div>
      </List>
    </>
  );
}

export default withRouter<any, any>(Home);
