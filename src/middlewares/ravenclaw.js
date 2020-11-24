import axios from 'axios';
import { FETCH_RAVENCLAW_CHARACTERS, saveRavenclawCharacters } from 'src/actions/ravenclaw';

const ravenclaw = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case FETCH_RAVENCLAW_CHARACTERS:
      console.log('middleware, action FETCH_MAIN_CHARACTERS');
      axios.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
      .then((response) => {
        // traitement si réponse est un succès
      console.log(response);
          // je veux stocker response.data dans le state => seule possibilité, 
          // dispatch une action au store
          store.dispatch(saveRavenclawCharacters(response.data));
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
export default ravenclaw;
