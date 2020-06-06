// Types
export const MAJ_PERSOS = 'MAJ_PERSOS';
export const RESET = 'RESET';

// Creators
export const majPersos = (persoActif) => ({
    //persos: tableau d'objet de chaque persos
  type: MAJ_PERSOS,
  persoActif,
});

export const resetPerso = (value) => ({
  type: RESET,
  value,
})
