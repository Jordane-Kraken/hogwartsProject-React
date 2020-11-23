import { SAVE_SLYTHERIN_CHARACTERS } from 'src/actions/slytherin';

const initialState = {
  // tableau vide en attendant de récupérer les recettes
  slytherinCharacters: [],
  // indique qu'on affiche un loader initialisement (recettes pas encore chargées)
  loading: true,
};

const slytherin = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SLYTHERIN_CHARACTERS:
      return {
        ...state,
        slytherinCharacters: action.slytherinCharacters,
        loading: false,
      };

    default: return { ...state };
  }
};

export default slytherin;
