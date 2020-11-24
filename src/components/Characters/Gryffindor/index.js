import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'react-bootstrap';

import './gryffindor.scss';

const Gryffindor = ({ gryffindorCharacters, loading, launchFetchGryffindorCharacters }) => {
  useEffect(() => {
    console.log('useEffect App');
    // ici je voudrais dispatch une action au store pour que le middleware la
    // traite. Mais je n'ai pas accès directement à store.dispatch() => il faut que
    // je prépare le dispatch de l'action dans le container du composant, et la
    // callback correspondante est fournir en prop au composant de présentation
    launchFetchGryffindorCharacters();
  }, []);

  return (
    <div className="gryffindor">
      {loading && (
      <div className="loading">
        Loading...
        <Spinner style={{ width: '5rem', margin: 'auto' }} animation="grow" />
      </div>
      )}
      {gryffindorCharacters.map((character) => (
        <Card key={character.name} className="gryffindor__card" style={{ width: '20rem' }}>
          <Card.Img variant="top" className="gryffindor__card__image" src={character.image} />
          <Card.Body>
            <Card.Title className="gryffindor__card__title">{character.name}</Card.Title>
            <Card.Text className="gryffindor__card__content">
              <span className="gryffindor__card__content__span">Year of birth :</span> {character.yearOfBirth}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

Gryffindor.propTypes = {
  launchFetchGryffindorCharacters: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  gryffindorCharacters: PropTypes.arrayOf( // un tableau de...
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      yearOfBirth: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Gryffindor;
