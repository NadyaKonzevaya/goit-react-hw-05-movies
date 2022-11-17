import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-right: 10px;

  &.active {
    color: red;
  }
  &:hover,
  :focus {
    text-decoration: underline;
  }
`;

export const Nav = styled.nav`
  padding: 20px;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 5px 5px lightgray;
  margin-bottom: 10px;
`;
