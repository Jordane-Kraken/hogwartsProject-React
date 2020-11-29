import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'react-bootstrap';

import './hufflepuff.scss';

const Hufflepuff = ({ hufflepuffCharacters, loading, launchFetchHufflepuffCharacters }) => {
  useEffect(() => {
    console.log('useEffect App');
    // ici je voudrais dispatch une action au store pour que le middleware la
    // traite. Mais je n'ai pas accès directement à store.dispatch() => il faut que
    // je prépare le dispatch de l'action dans le container du composant, et la
    // callback correspondante est fournir en prop au composant de présentation
    launchFetchHufflepuffCharacters();
  }, []);

  return (
    <>
      <h2 className="title">Hufflepuff</h2>
      <div className="hufflepuff">
        {loading && (
        <div className="loading">
          Loading...
          <Spinner style={{ width: '5rem', margin: 'auto' }} animation="grow" />
        </div>
        )}
        {hufflepuffCharacters.map((character) => (
          <Card key={character.name} className="hufflepuff__card" style={{ width: '20rem' }}>
            <Card.Img variant="top" className="hufflepuff__card__image" src={character.image} />
            <Card.Body>
              <Card.Title className="hufflepuff__card__title">{character.name}</Card.Title>
              <Card.Text className="hufflepuff__card__content">
                <span className="hufflepuff__card__content__span">Year of birth :</span> {character.yearOfBirth}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

Hufflepuff.propTypes = {
  launchFetchHufflepuffCharacters: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  hufflepuffCharacters: PropTypes.arrayOf( // un tableau de...
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      yearOfBirth: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Hufflepuff;
