import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #FFFAC7;
  font-size: 18px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #BFBC95;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;