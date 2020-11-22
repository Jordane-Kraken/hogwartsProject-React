// == Import npm
import React from 'react';
import { Card } from 'react-bootstrap';

// == Import
import './home.scss';
import logoHogwarts from '../../assets/images/hogwarts-7935.png';
import harry from '../../assets/images/harry.webp';

// == Composant
const Home = () => (
  <div className="home">
    <Card className="home__card" style={{ width: '50rem' }}>
      <Card.Img className="home__card__img" variant="top" src={harry} alt="harryPotter" />
    </Card>
    <Card className="home__card" style={{ width: '23rem' }}>
      <Card.Img className="home__card__img" variant="top" src={logoHogwarts} alt="logoHogwarts" />
      <Card.Body>
        <Card.Title className="home__card__title">* Welcome to the magical world of... Hogwarts *</Card.Title>
        <Card.Text className="home__card__content">
          This project use the <a className="firstDiv__content__link" href="https://hp-api.herokuapp.com/">HP API</a>.
          I made this to practice coding and apply new concepts seen during my formation
          especially React.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

// == Export
export default Home; 
