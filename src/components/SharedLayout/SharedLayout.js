import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Nav } from '../SharedLayout/SharedLayour.styled';

const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          {' '}
          Home{' '}
        </StyledLink>
        <StyledLink to="/movies"> Movies </StyledLink>
      </Nav>
      {/* <AppBar /> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
