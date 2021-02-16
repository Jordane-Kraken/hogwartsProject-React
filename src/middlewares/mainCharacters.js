import axios from 'axios';
import { FETCH_MAIN_CHARACTERS, saveMainCharacters } from 'src/actions/mainCharacters';

const mainCharacters = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MAIN_CHARACTERS:
      axios.get('http://hp-api.herokuapp.com/api/characters')
        .then((response) => {
          store.dispatch(saveMainCharacters(response.data));
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
