export const GAME_STYLE = 'GAME_STYLE';
export const MUSIC = 'MUSIC';
export const MENU = 'MENU';
export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export const SOUND = 'SOUND';
export const END_GAME = 'END_GAME';


export const gameStyle = (gameStyle) => ({
   type: GAME_STYLE,
   gameStyle: gameStyle,
});

export const music = (name, value) => ({
  type: MUSIC,
  name: name,
  value: value,
});

export const sound = (name, value) => ({
  type: SOUND,
  name: name,
  value: value,
})

export const menuOpen = () => ({
  type: MENU,
})

export const changeVolume = (songType, songVolume) => ({
  type: CHANGE_VOLUME,
  songType:songType,
  songVolume: songVolume,
})

export const endGame = (value) => ({
  type: END_GAME,
  value: value,
})