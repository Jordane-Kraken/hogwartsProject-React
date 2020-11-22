// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

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
      <Link to="/spells"><Navbar.Brand className="nav__item">Spells</Navbar.Brand></Link>
    </Container>
  </Navbar>
);

// == Export
export default Header;
