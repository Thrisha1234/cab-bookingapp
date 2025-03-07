import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/book-ride">Book Ride</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ride-history">Ride History</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;