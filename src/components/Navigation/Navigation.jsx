import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import './navigation.scss';

const Nav = styled.nav`
  background-color: #2daae1;
  padding: 10px;
  text-align: center;
  position: relative;
`;

const NavLinks = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  flex-direction: column;
  position: absolute;
  top: -79px;
  right: 0;
  background-color: #2daae1;
  width: 200px;
  text-align: left;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    text-align: center;
  }
`;

const StyledNavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  padding: 10px;
  display: block;

  &:hover {
    color: black;
    background-color: #f9b233;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Hamburger onClick={toggleMenu}>
        <Line />
        <Line />
        <Line />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <StyledNavLink to="/" activeclassname="active">Accueil</StyledNavLink>
        <StyledNavLink to="/tarifsElectricien" activeclassname="active">Tarifs électricien</StyledNavLink>
        <StyledNavLink to="/tarifsSerrurier" activeclassname="active">Tarifs serrurier</StyledNavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navigation;

