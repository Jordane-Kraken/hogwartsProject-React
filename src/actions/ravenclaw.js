// === action types
export const FETCH_RAVENCLAW_CHARACTERS = 'FETCH_RAVENCLAW_CHARACTERS';
export const SAVE_RAVENCLAW_CHARACTERS = 'SAVE_RAVENCLAW_CHARACTERS';

// === action creators
export const fetchRavenclawCharacters = () => ({
  type: FETCH_RAVENCLAW_CHARACTERS,
});

export const saveRavenclawCharacters = (ravenclawCharacters) => ({
  type: SAVE_RAVENCLAW_CHARACTERS,
  ravenclawCharacters,
});
