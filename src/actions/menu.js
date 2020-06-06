// Types
export const PAUSE = 'PAUSE';
export const SET_MUSIC = 'SET_MUSIC';
export const VOLUME_MUSIQUE_PLUS = 'VOLUME_MUSIQUE_PLUS';
export const VOLUME_MUSIQUE_MOIN = 'VOLUME_MUSIQUE_MOIN';
export const VOLUME_EXPLOSION_PLUS = 'VOLUME_EXPLOSION_PLUS';
export const VOLUME_EXPLOSION_MOIN = 'VOLUME_EXPLOSION_MOIN';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SAVE_MUSIQUE_CURRENTTIME = 'SAVE_MUSIQUE_CURRENTTIME';
export const FIN_DE_PARTIE = 'FIN_DE_PARTIE';
export const RESET = 'RESET';


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

export const changePage = (value) => {
  return({
  type: CHANGE_PAGE,
  page: value,
})}

export const saveCurrentTime = (value) => {
  return({
    type: SAVE_MUSIQUE_CURRENTTIME,
    currentTime: value,
  })
}

export const finDePartie = () => {
  return{
    type: FIN_DE_PARTIE,
  }
}

export const menuReset = () => {
  return {
    type: RESET,
  }
}