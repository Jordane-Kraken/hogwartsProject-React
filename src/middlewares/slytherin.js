import axios from 'axios';
import { FETCH_SLYTHERIN_CHARACTERS, saveSlytherinCharacters } from 'src/actions/slytherin';

const slytherin = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SLYTHERIN_CHARACTERS:
      axios.get('http://hp-api.herokuapp.com/api/characters/house/slytherin')
        .then((response) => {
          store.dispatch(saveSlytherinCharacters(response.data));
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
export default slytherin;
