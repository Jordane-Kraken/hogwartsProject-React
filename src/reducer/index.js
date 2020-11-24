import { combineReducers } from 'redux';
// on importe tous les reducers
import mainCharactersReducer from './mainCharacters';
import gryffindorReducer from './gryffindor';
import slytherinReducer from './slytherin';
import hufflepuffReducer from './hufflepuff';
import ravenclawReducer from './ravenclaw';

// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  mainCharacters: mainCharactersReducer,
  gryffindor: gryffindorReducer,
  slytherin: slytherinReducer,
  hufflepuff: hufflepuffReducer,
  ravenclaw: ravenclawReducer,
  // etc
});
export default rootReducer;
