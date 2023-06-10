import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  padding: 8px 16px;
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