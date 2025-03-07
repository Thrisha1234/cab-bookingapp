import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to left, #4e6af6, #3a5bd9);
  color: white; /* Set text color to white */
  margin-top: 0; /* Set margin-top to 0 */
`;

const NavLink = styled(Link)`
  color: white; /* Change text color to white */
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem; /* Increase font size */
  font-weight: bold; /* Increase boldness */

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white; /* Change button text color to white */
  cursor: pointer;
  font-size: 1.2rem; /* Increase font size */
  font-weight: bold; /* Increase boldness */

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <Nav>
      <NavLink to="/">RideEase</NavLink>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/ride-booking">Book Ride</NavLink>
            <NavLink to="/ride-history">Ride History</NavLink>
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
