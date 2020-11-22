import { SAVE_MAIN_CHARACTERS } from 'src/actions/mainCharacters';

const initialState = {
  // tableau vide en attendant de récupérer les recettes
  mainCharacters: [],
  // indique qu'on affiche un loader initialisement (recettes pas encore chargées)
  loading: true,
};

const mainCharacters = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MAIN_CHARACTERS:
      return {
        ...state,
        mainCharacters: action.mainCharacters,
        loading: false,
      };

    default: return { ...state };
  }
};

export default mainCharacters;
