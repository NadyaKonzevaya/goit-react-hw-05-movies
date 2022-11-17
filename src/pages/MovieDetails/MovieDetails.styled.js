import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  vertical-align: middle;
  margin-right: 5px;
  color: black;
`;

export const StyledDiv = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 5px 5px lightgray;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const StyledInfoDiv = styled.div`
  margin-left: 25px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const StyledLi = styled.li`
  margin-right: 10px;
`;

export const StyledAddInfoDiv = styled.div`
  border-bottom: 1px solid lightgray;
  box-shadow: 0px 5px 5px lightgray;
`;
