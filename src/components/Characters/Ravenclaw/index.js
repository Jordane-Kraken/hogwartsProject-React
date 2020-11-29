import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'react-bootstrap';

import './ravenclaw.scss';

const Ravenclaw = ({ ravenclawCharacters, loading, launchFetchRavenclawCharacters }) => {
  useEffect(() => {
    console.log('useEffect App');
    // ici je voudrais dispatch une action au store pour que le middleware la
    // traite. Mais je n'ai pas accès directement à store.dispatch() => il faut que
    // je prépare le dispatch de l'action dans le container du composant, et la
    // callback correspondante est fournir en prop au composant de présentation
    launchFetchRavenclawCharacters();
  }, []);

  return (
    <>
      <h2 className="title">Ravenclaw</h2>
      <div className="ravenclaw">
        {loading && (
        <div className="loading">
          Loading...
          <Spinner style={{ width: '5rem', margin: 'auto' }} animation="grow" />
        </div>
        )}
        {ravenclawCharacters.map((character) => (
          <Card key={character.name} className="ravenclaw__card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="ravenclaw__card__image" src={character.image} />
            <Card.Body>
              <Card.Title className="ravenclaw__card__title">{character.name}</Card.Title>
              <Card.Text className="ravenclaw__card__content">
                <span className="ravenclaw__card__content__span">Year of birth :</span> {character.yearOfBirth}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

Ravenclaw.propTypes = {
  launchFetchRavenclawCharacters: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  ravenclawCharacters: PropTypes.arrayOf( // un tableau de...
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      yearOfBirth: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Ravenclaw;
