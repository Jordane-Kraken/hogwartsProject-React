import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { CardGroup, Card } from 'react-bootstrap';

import './mainCharacters.scss';

const MainCharacters = ({ mainCharacters, launchFetchMainCharacters }) => {
  useEffect(() => {
    console.log('useEffect App');
    // ici je voudrais dispatch une action au store pour que le middleware la
    // traite. Mais je n'ai pas accès directement à store.dispatch() => il faut que
    // je prépare le dispatch de l'action dans le container du composant, et la
    // callback correspondante est fournir en prop au composant de présentation
    launchFetchMainCharacters();
  }, []);

  return (
    <div className="mainCharacters">
      {mainCharacters.map((mainCharacter) => (
        <Card key={mainCharacter.name} className="mainCharacters__card" style={{ width: '20rem' }}>
          <Card.Img variant="top" className="mainCharacters__card__image" src={mainCharacter.image} />
          <Card.Body>
            <Card.Title className="mainCharacters__card__title">{mainCharacter.name}</Card.Title>
            <Card.Text className="mainCharacters__card__content">
              House : {mainCharacter.house}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

MainCharacters.propTypes = {
  mainCharacters: PropTypes.arrayOf( // un tableau de...
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MainCharacters;
