export const KEY_INPUT = 'KEY_INPUT';
export const RESET_PAUSE = 'RESET_PAUSE';

export const keyInput = (key, value, pauseActive) => {
    
    return ({
    type: KEY_INPUT,
    value: value,
    key: key,
    pauseActive: pauseActive,
})};