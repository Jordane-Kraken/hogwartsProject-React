// === action types
export const FETCH_GRYFFINDOR_CHARACTERS = 'FETCH_GRYFFINDOR_CHARACTERS';
export const SAVE_GRYFFINDOR_CHARACTERS = 'SAVE_GRYFFINDOR_CHARACTERS';

// === action creators
export const fetchGryffindorCharacters = () => ({
  type: FETCH_GRYFFINDOR_CHARACTERS,
});

export const saveGryffindorCharacters = (gryffindorCharacters) => ({
  type: SAVE_GRYFFINDOR_CHARACTERS,
  gryffindorCharacters,
});
