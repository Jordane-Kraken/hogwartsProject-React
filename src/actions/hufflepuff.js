// === action types
export const FETCH_HUFFLEPUFF_CHARACTERS = 'FETCH_HUFFLEPUFF_CHARACTERS';
export const SAVE_HUFFLEPUFF_CHARACTERS = 'SAVE_HUFFLEPUFF_CHARACTERS';

// === action creators
export const fetchHufflepuffCharacters = () => ({
  type: FETCH_HUFFLEPUFF_CHARACTERS,
});

export const saveHufflepuffCharacters = (hufflepuffCharacters) => ({
  type: SAVE_HUFFLEPUFF_CHARACTERS,
  hufflepuffCharacters,
});
