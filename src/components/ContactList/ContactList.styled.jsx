import styled from '@emotion/styled';

export const ListContacts = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #f7ece1;
  text-align: start;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #27223d;
  color: #f7ece1;
  font-size: 16px;
  transition: all 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.0075);
  }
`;
