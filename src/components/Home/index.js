// == Import npm
import React from 'react';
import { Card } from 'react-bootstrap';

// == Import
import './home.scss';
import logoHogwarts from '../../assets/images/hogwarts-7935.png';
import hogwarts from '../../assets/images/wallpaperHogwarts.jpg';

// == Composant
const Home = () => (
  <div className="home">
    <Card className="home__card">
      <Card.Img className="home__card__img" style={{ width: '30%' , position: 'relative', left: '10%' }} variant="top" src={logoHogwarts} alt="logoHogwarts" />
      <Card.Body>
        <Card.Title className="home__card__title">* Welcome to the magical world of... Hogwarts *</Card.Title>
        <Card.Text className="home__card__content">
          This project use the <a className="firstDiv__content__link" href="https://hp-api.herokuapp.com/">HP API</a>.
          I made this to practice coding and apply new concepts seen during my formation
          especially React and Redux.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

// == Export
export default Home; 
