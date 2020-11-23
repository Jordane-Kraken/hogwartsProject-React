import { SAVE_GRYFFINDOR_CHARACTERS } from 'src/actions/gryffindor';

const initialState = {
  // tableau vide en attendant de récupérer les recettes
  gryffindorCharacters: [],
  // indique qu'on affiche un loader initialisement (recettes pas encore chargées)
  loading: true,
};

const gryffindor = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_GRYFFINDOR_CHARACTERS:
      return {
        ...state,
        gryffindorCharacters: action.gryffindorCharacters,
        loading: false,
      };

    default: return { ...state };
  }
};

export default gryffindor;
