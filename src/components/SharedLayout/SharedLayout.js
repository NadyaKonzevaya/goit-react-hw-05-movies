import { Outlet } from 'react-router-dom';
import { StyledLink, Nav } from '../SharedLayout/SharedLayour.styled';

const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/"> Home </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </Nav>
      {/* <AppBar /> */}
      <Outlet />
    </div>
  );
};

export default SharedLayout;
