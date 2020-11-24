import { SAVE_HUFFLEPUFF_CHARACTERS } from 'src/actions/hufflepuff';

const initialState = {
  // tableau vide en attendant de récupérer les recettes
  hufflepuffCharacters: [],
  // indique qu'on affiche un loader initialisement (recettes pas encore chargées)
  loading: true,
};

const hufflepuff = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_HUFFLEPUFF_CHARACTERS:
      return {
        ...state,
        hufflepuffCharacters: action.hufflepuffCharacters,
        loading: false,
      };

    default: return { ...state };
  }
};

export default hufflepuff;
