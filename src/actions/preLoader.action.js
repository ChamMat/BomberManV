export const IMAGE_LOAD = 'IMAGE_LOAD';
export const AUDIO_LOAD = 'AUDIO_LOAD';
export const NEW_COUNT = 'NEW_COUNT';
export const GAME_READY = 'GAME_READY';


export const imageLoad = () => ({
   type: IMAGE_LOAD,
});

export const audioLoad = () => ({
   type: AUDIO_LOAD,
});

export const newCount = () => ({
   type: NEW_COUNT,
});

export const gameReady = () => ({
   type: GAME_READY,
});