// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';

import choixPeau from '../../assets/images/hat.png';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <Navbar className="nav" expand="lg">
    <Container>
      <img src={choixPeau} alt="choixPeau" className="nav__img" />
      <Link to="/"><Navbar.Brand className="nav__item">Home</Navbar.Brand></Link>
      <Link to="/mainCharacters"><Navbar.Brand className="nav__item">Main Characters</Navbar.Brand></Link>
      <Link to="/houses"><Navbar.Brand className="nav__item">Houses</Navbar.Brand></Link>
      <NavDropdown title="Characters from a specific house" id="basic-nav-dropdown" className="nav__item">
        <Link to="/characters/gryffindor"><Navbar.Brand className="nav__item">Gryffindor</Navbar.Brand></Link>
        <Link to="/characters/slytherin"><Navbar.Brand className="nav__item">Slytherin</Navbar.Brand></Link>
        <Link to="/characters/hufflepuff"><Navbar.Brand className="nav__item">Hufflepuff</Navbar.Brand></Link>
        <Link to="/characters/ravenclaw"><Navbar.Brand className="nav__item">Ravenclaw</Navbar.Brand></Link>
      </NavDropdown>
    </Container>
  </Navbar>
);

// == Export
export default Header;
