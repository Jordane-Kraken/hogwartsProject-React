import axios from 'axios';
import { FETCH_MAIN_CHARACTERS, saveMainCharacters } from 'src/actions/mainCharacters';

const mainCharacters = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_MAIN_CHARACTERS:
      console.log('middleware, action FETCH_MAIN_CHARACTERS');
      axios.get('http://hp-api.herokuapp.com/api/characters')
      .then((response) => {
        // traitement si réponse est un succès
      console.log(response);
          // je veux stocker response.data dans le state => seule possibilité, 
          // dispatch une action au store
          store.dispatch(saveMainCharacters(response.data));
          console.log(response.data);
      })
        .catch((error) => {
        // traitement si réponse est une erreur
        });
      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default mainCharacters;
