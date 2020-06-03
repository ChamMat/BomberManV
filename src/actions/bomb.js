// Types
export const NEW_BOMB = 'NEW_BOMB';

// Creators
export const setNewBomb = (value) => ({
    //persos: tableau d'objet de chaque persos
  type: NEW_BOMB,
  value,
});
