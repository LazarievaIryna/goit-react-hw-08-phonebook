import styled from 'styled-components';

export const Button = styled.button`
  
  text-decoration: none;
  color: white;
  
  &.active {
    text-decoration: underline;
    color: black;
  }
  :hover {
    text-decoration: underline;
  }
`;