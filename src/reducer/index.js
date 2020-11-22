import { combineReducers } from 'redux';
// on importe tous les reducers
import mainCharactersReducer from './mainCharacters';

// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  mainCharacters: mainCharactersReducer,
  // etc
});
export default rootReducer;
