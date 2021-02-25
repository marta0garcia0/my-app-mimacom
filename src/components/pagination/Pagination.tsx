import React, { useEffect, useState } from 'react';
import { ApiData } from '../../models/apiData';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


interface Props {
  onAddUsers: Function;
  usersApiData?: ApiData | null;
  isDisabled?: boolean;
}

export const ActionButton: any = styled.button`
  font-size: 18px;
  font-weight: bold;
  border: 0px;
  margin: 2px;
  color: ${(props: Props) => (props.isDisabled ? 'red' : 'grey')};
  cursor: ${(props: Props) => (props.isDisabled ? 'no-drop' : 'pointer')};
`;

export const NextButton = styled(ActionButton)`
  order: 2;
`;

export const PreviousButton = styled(ActionButton)`
  order: 1;
`;

export const Box = styled.div`
  font-family: 'Roboto';
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0px;
  padding: 4px;
`;

export const Wrapper = styled.div`
  order: 3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  font-family: 'Roboto';
  color: grey;
`;

export const Text: any = styled.span`
  font-family: 'Roboto';
  padding: 5px;
`;

export const PreText = styled(Text)`
  order: 1;
  margin-right: 4px;
`;

export const PostText = styled(Text)`
  order: 3;
  margin-left: 4px;
`;

export const Select = styled.select`
  order: 2;
  min-width: 40px;
  font-size: 16px;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 4px;
`;

export const Bucket = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  font-size: 10px;
`;

export const Group = styled.div`
  font-family: 'Roboto';
  margin-left: 20px;
`;

function Pagination(props: Props) {
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const previousPage = () => {
    if (props.usersApiData && props.usersApiData.page &&
      props.usersApiData.page - 1 >= 1) {
      props.onAddUsers(props.usersApiData.page - 1, 6);
    }
  };
  const nextPage = () => {
    if (props.usersApiData && props.usersApiData.page &&
        props.usersApiData.page + 1 <= props.usersApiData.total_pages) {
      props.onAddUsers(props.usersApiData.page + 1, 6);
    }

  };

  useEffect(() => {
    const page = props && props.usersApiData && props.usersApiData.page || 1;
    const totalPages = props && props.usersApiData && props.usersApiData.total_pages || 1;
    if (page === totalPages !== isLast) {
      setIsLast(page === totalPages);
    }
    if (page === 1 !== isFirst) {
      setIsFirst(page === 1);
    }
  });

  return (
    <div className='App'>
      {props.usersApiData ?
        <div>
          <Box >
            <Wrapper>
              <PreText>Page</PreText>
              {props.usersApiData.page}
              <PostText>{`of ${props.usersApiData.total_pages}`}</PostText>
            </Wrapper>
            <PreviousButton isDisabled={isFirst} onClick={previousPage}>
              <FaChevronLeft />
            </PreviousButton>
            <NextButton isDisabled={isLast} onClick={nextPage}>
              <FaChevronRight />
            </NextButton>
          </Box>
        </div>
        : ''}
    </div>
  );
}

export default Pagination;
