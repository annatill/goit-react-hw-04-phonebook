import styled from '@emotion/styled';

export const InfoContact = styled.p`
  margin: 0;
  padding: 0;
  width: 110px;
`;

export const Button = styled.button`
  display: inline-block;
  height: 30px;

  padding: 0 15px;

  border-radius: 5px;
  border: 1px solid #292441;
  background-color: #382f5b;
  font-size: 14px;
  font-weight: 500;
  color: #f7ece1;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #4b3d7d;
  }
`;
