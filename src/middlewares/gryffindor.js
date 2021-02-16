import axios from 'axios';
import { FETCH_GRYFFINDOR_CHARACTERS, saveGryffindorCharacters } from 'src/actions/gryffindor';

const gryffindor = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GRYFFINDOR_CHARACTERS:
      axios.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
        .then((response) => {
          store.dispatch(saveGryffindorCharacters(response.data));
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
export default gryffindor;
