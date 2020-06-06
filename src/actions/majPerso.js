// Types
export const MAJ_PERSOS = 'MAJ_PERSOS';
export const RESET = 'RESET';

// Creators
export const majPersos = (persosLocal) => ({
    //persos: tableau d'objet de chaque persos
  type: MAJ_PERSOS,
  persosLocal,
});

export const resetPerso = (value) => ({
  type: RESET,
  value,
})
