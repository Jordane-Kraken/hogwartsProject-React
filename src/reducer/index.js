import { combineReducers } from 'redux';
// on importe tous les reducers
import mainCharactersReducer from './mainCharacters';
import gryffindorReducer from './gryffindor';
import slytherinReducer from './slytherin';

// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  mainCharacters: mainCharactersReducer,
  gryffindor: gryffindorReducer,
  slytherin: slytherinReducer,
  // etc
});
export default rootReducer;
