// === action types
export const FETCH_SLYTHERIN_CHARACTERS = 'FETCH_SLYTHERIN_CHARACTERS';
export const SAVE_SLYTHERIN_CHARACTERS = 'SAVE_SLYTHERIN_CHARACTERS';

// === action creators
export const fetchSlytherinCharacters = () => ({
  type: FETCH_SLYTHERIN_CHARACTERS,
});

export const saveSlytherinCharacters = (slytherinCharacters) => ({
  type: SAVE_SLYTHERIN_CHARACTERS,
  slytherinCharacters,
});
