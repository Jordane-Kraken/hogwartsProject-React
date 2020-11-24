import { SAVE_RAVENCLAW_CHARACTERS } from 'src/actions/ravenclaw';

const initialState = {
  // tableau vide en attendant de récupérer les recettes
  ravenclawCharacters: [],
  // indique qu'on affiche un loader initialisement (recettes pas encore chargées)
  loading: true,
};

const ravenclaw = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RAVENCLAW_CHARACTERS:
      return {
        ...state,
        ravenclawCharacters: action.ravenclawCharacters,
        loading: false,
      };

    default: return { ...state };
  }
};

export default ravenclaw;
