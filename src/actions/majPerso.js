// Types
export const MAJ_PERSOS = 'MAJ_PERSOS';

// Creators
export const majPersos = (persosLocal) => ({
    //persos: tableau d'objet de chaque persos
  type: MAJ_PERSOS,
  persosLocal,
});
