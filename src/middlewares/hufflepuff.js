import axios from 'axios';
import { FETCH_HUFFLEPUFF_CHARACTERS, saveHufflepuffCharacters } from 'src/actions/hufflepuff';

const hufflepuff = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_HUFFLEPUFF_CHARACTERS:
      axios.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff')
        .then((response) => {
          store.dispatch(saveHufflepuffCharacters(response.data));
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
export default hufflepuff;
