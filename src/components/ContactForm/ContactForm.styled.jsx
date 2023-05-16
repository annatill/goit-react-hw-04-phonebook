import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > :last-child {
    flex-basis: 100%;
    margin: 0 300px;
    margin-top: 24px;
  }

  & > :nth-of-type(2) {
    margin-right: 0;
  }
`;

export const ContainerInput = styled.div`
  display: inline-block;
  width: 200px;
  margin-right: 38px;
  text-align: start;
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #2e284a;
  color: #f7ece1;
  margin-top: 3px;

  &:focus,
  &:hover,
  &:active {
    outline: #382f5b solid 1px;
  }
`;

export const Label = styled.label`
  padding-left: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  display: inline-block;
  height: 30px;
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
    outline: none;
  }
`;

export const Message = styled.p`
  font-size: 14px;
  color: #905f8b;
  margin-top: 10px;
  padding-left: 5px;
`;
