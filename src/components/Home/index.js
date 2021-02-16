// == Import npm
import React from 'react';
import { Card } from 'react-bootstrap';

// == Import
import './home.scss';


// == Composant
const Home = () => (
  <div className="home">
    <div className="home__card">
      <h1 className="home__card__title">* Welcome to the magical world of... Hogwarts *</h1>
      <p className="home__card__content">
        This project use the <a className="firstDiv__content__link" href="https://hp-api.herokuapp.com/">HP API</a>.
        I made this to practice coding and apply new concepts seen during my formation
        especially React and Redux.
      </p>
    </div>
  </div>
);

// == Export
export default Home; 
