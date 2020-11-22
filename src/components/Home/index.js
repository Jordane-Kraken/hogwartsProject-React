// == Import npm
import React from 'react';
import { Card } from 'react-bootstrap';

// == Import
import './home.scss';
import logoHogwarts from '../../assets/images/hogwarts-7935.png';

// == Composant
const Home = () => (
  <div className="home">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logoHogwarts} alt="logoHogwarts" />
      <Card.Body>
        <Card.Title>* Welcome to the magical world of... Hogwarts *</Card.Title>
        <Card.Text>
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
