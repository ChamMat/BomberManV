const reducer = (accumulator, currentValue) => accumulator + currentValue;
// Send sum of all audio files
export const audiosLenght = () => (
    audioArray.map((object) => (
    object.array.length
)).reduce(reducer));

const musiquePath = 'audio/music/';
const musiqueArray = [
    'BossMain.wav',
    'Mercury.wav',
    'BossIntro.wav',
];

const soundPath = 'audio/sound/';
const soundArray = [
    'bombBlast.flac',
    'bombBonusSound.wav',
    'menuClick.wav',
    'speedBonusSound.wav'
];

const audioArray = [
    {
        path: musiquePath,
        array: musiqueArray
    },
    {
        path: soundPath,
        array: soundArray
    }
];

export default audioArray;