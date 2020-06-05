// Types
export const PAUSE = 'PAUSE';
export const SET_MUSIC = 'SET_MUSIC';
export const VOLUME_MUSIQUE_PLUS = 'VOLUME_MUSIQUE_PLUS';
export const VOLUME_MUSIQUE_MOIN = 'VOLUME_MUSIQUE_MOIN';
export const VOLUME_EXPLOSION_PLUS = 'VOLUME_EXPLOSION_PLUS';
export const VOLUME_EXPLOSION_MOIN = 'VOLUME_EXPLOSION_MOIN';


// Creators
export const pause = () => {
  return ({
  type: PAUSE,
})};

export const setAmbianceMusic = (value) => ({
  type: SET_MUSIC,
  value,
});

export const musiquePlus = () => ({
  type: VOLUME_MUSIQUE_PLUS,
});

export const musiqueMoin = () => ({
  type: VOLUME_MUSIQUE_MOIN,
});

export const explosionPlus = () => ({
  type: VOLUME_EXPLOSION_PLUS,
});

export const explosionMoin = () => ({
  type: VOLUME_EXPLOSION_MOIN,
});