// == Import npm
import React from 'react';
import { Card } from 'react-bootstrap';

// == Import
import './houses.scss';
import gryffindor from '../../assets/images/gryffindor.png';
import slytherin from '../../assets/images/slytherin.png';
import hufflepuff from '../../assets/images/hufflepuff.png';
import ravenclaw from '../../assets/images/ravenclaw2.png';

// == Composant
const Houses = () => (
  <div className="houses">
    <Card className="houses__card" style={{ width: '23rem' }}>
      <Card.Img className="houses__card__img" variant="top" src={gryffindor} alt="gryffindor" />
      <Card.Body>
        <Card.Title className="houses__card__title">Gryffindor</Card.Title>
        <Card.Text className="houses__card__content">
          <span className="houses__card__content__span">Values :</span> Courage, Bravery, Determination, Daring, Nerve, Chivalry
          <span className="houses__card__content__span">Head :</span> Minerva McGonagall
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="houses__card" style={{ width: '23rem' }}>
      <Card.Img className="houses__card__img" variant="top" src={slytherin} alt="slytherin" />
      <Card.Body>
        <Card.Title className="houses__card__title">Slytherin</Card.Title>
        <Card.Text className="houses__card__content">
          <span className="houses__card__content__span">Values :</span> Resourcefulness, Determination, Pride, Cunning, Ambition, Self-preservation
          <span className="houses__card__content__span">Head :</span> Severus Snape
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="houses__card" style={{ width: '23rem' }}>
      <Card.Img className="houses__card__img" variant="top" src={hufflepuff} alt="hufflepuff" />
      <Card.Body>
        <Card.Title className="houses__card__title">Hufflepuff</Card.Title>
        <Card.Text className="houses__card__content">
          <span className="houses__card__content__span">Values :</span> Hard-working, Patience, Fairness, Just, Loyalty, Modesty
          <span className="houses__card__content__span">Head :</span> Pomona Sprout
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="houses__card" style={{ width: '23rem' }}>
      <Card.Img className="houses__card__img" variant="top" src={ravenclaw} alt="ravenclaw" />
      <Card.Body>
        <Card.Title className="houses__card__title">Ravenclaw</Card.Title>
        <Card.Text className="houses__card__content">
          <span className="houses__card__content__span">Values :</span> Wit, Learning, Wisdom, Acceptance, Intelligence, Creativity
          <span className="houses__card__content__span">Head :</span> Filius Flitwick
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

// == Export
export default Houses; 
