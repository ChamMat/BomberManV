// Types
export const MAJ_KEY_INPUT = 'MAJ_KEY_INPUT';

// Creators
export const changeInput = (key, value) => ({
    //persos: tableau d'objet de chaque persos
  type: MAJ_KEY_INPUT,
  key,
  value,
});

// const initialState = {
//   p1Up:false,
//   p1Left:false,
//   p1Right:false,
//   p1Bomb:false,
//   p2Up: false,
//   p2Left: false,
//   p2Right: false,
//   p2Bomb: false,
// };