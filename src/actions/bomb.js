// Types
export const NEW_BOMB = 'NEW_BOMB';
export const MAJ_BOMB = 'MAJ_BOMB';
export const RESET = 'RESET';


// Creators
export const setNewBomb = (value) => ({
    //persos: tableau d'objet de chaque persos
  type: NEW_BOMB,
  value,
});

export const majBomb = (newTab) => {
  return ({
  type: MAJ_BOMB,
  newTab,
})};

export const resetBombe = () => {
  return ({
    type: RESET,
  })
}