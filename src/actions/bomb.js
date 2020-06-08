// Types
export const NEW_BOMB = 'NEW_BOMB';
export const MAJ_BOMB = 'MAJ_BOMB';
export const RESET_BOMB = 'RESET_BOMB';
export const EXPLOSE = 'EXPLOSE';


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
    type: RESET_BOMB,
  })
}

export const explose = (id) => {
  return ({
    type: EXPLOSE,
    id: id,
  })
}