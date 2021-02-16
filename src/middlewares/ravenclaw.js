import axios from 'axios';
import { FETCH_RAVENCLAW_CHARACTERS, saveRavenclawCharacters } from 'src/actions/ravenclaw';

const ravenclaw = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RAVENCLAW_CHARACTERS:
      axios.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
        .then((response) => {
          store.dispatch(saveRavenclawCharacters(response.data));
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
export default ravenclaw;
