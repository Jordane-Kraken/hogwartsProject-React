// === action types
export const FETCH_MAIN_CHARACTERS = 'FETCH_MAIN_CHARACTERS';
export const SAVE_MAIN_CHARACTERS = 'SAVE_MAIN_CHARACTERS';

// === action creators
export const fetchMainCharacters = () => ({
  type: FETCH_MAIN_CHARACTERS,
});

export const saveMainCharacters = (mainCharacters) => ({
  type: SAVE_MAIN_CHARACTERS,
  mainCharacters,
});
