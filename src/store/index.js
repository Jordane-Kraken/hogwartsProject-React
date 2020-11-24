import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainCharactersMiddleware from 'src/middlewares/mainCharacters';
import gryffindorMiddleware from 'src/middlewares/gryffindor';
import slytherinMiddleware from 'src/middlewares/slytherin';
import hufflepuffMiddleware from 'src/middlewares/hufflepuff';
import ravenclawMiddleware from 'src/middlewares/ravenclaw';
import reducer from 'src/reducer';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    mainCharactersMiddleware,
    gryffindorMiddleware,
    slytherinMiddleware,
    hufflepuffMiddleware,
    ravenclawMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
