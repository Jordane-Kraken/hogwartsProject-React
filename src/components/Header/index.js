// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavDropdown } from 'react-bootstrap';

import choixPeau from '../../assets/images/hat.png';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <Navbar collapseOnSelect className="nav" expand="lg">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <NavLink to="/"><img src={choixPeau} alt="choixPeau" className="nav__img" /></NavLink>
      <NavLink to="/" className="nav__item" activeClassName="nav__item--active" exact>Home</NavLink>
      <NavLink to="/mainCharacters" className="nav__item" activeClassName="nav__item--active">Main Characters</NavLink>
      <NavLink to="/houses" className="nav__item" activeClassName="nav__item--active">Houses</NavLink>
      <NavDropdown title="Characters from a specific house" id="basic-nav-dropdown" className="nav__item" activeClassName="nav__item--active">
        <NavLink to="/characters/gryffindor" className="nav__item">Gryffindor</NavLink>
        <NavLink to="/characters/slytherin" className="nav__item">Slytherin</NavLink>
        <NavLink to="/characters/hufflepuff" className="nav__item">Hufflepuff</NavLink>
        <NavLink to="/characters/ravenclaw" className="nav__item">Ravenclaw</NavLink>
      </NavDropdown>
    </Navbar.Collapse>
  </Navbar>
);

// == Export
export default Header;
