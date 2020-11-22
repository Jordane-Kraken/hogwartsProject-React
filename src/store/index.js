import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainCharactersMiddleware from 'src/middlewares/mainCharacters';
import reducer from 'src/reducer';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    mainCharactersMiddleware,
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
