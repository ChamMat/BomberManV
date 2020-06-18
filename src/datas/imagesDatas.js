const reducer = (accumulator, currentValue) => accumulator + currentValue;
// Send sum of all images files
export const imagesLenght = () => (
    imagesArray.map((object) => (
    object.array.length
)).reduce(reducer));

const backgroundPath = 'image/background/';
const backgroundArray = [
    'backgroundBack.png',
    'backgroundFront.png'
];

const bombPath = 'image/bomb/';
const bombArray = [
    'bomb0.png'
];

const explosionPath = 'image/explosion/';
const explosionArray = [
    'explosion0.png',
    'explosion1.png',
    'explosion2.png',
    'explosion3.png',
    'explosion4.png',
    'explosion5.png',
    'explosion6.png',
    'explosion7.png',
    'explosion8.png',
    'explosion9.png',
    'explosion10.png',
    'explosion11.png'
];

const persoDeadPath = 'image/perso/dead/';
const persoDeadArray = [
    'mort0.png',
    'mort1.png',
    'mort2.png',
    'mort3.png',
    'mort4.png',
    'mort5.png',
    'mort6.png',
    'mort7.png'
];

const persoIdlePath = 'image/perso/idle/';
const persoIdleArray = [
    'heroIdle00.png',
    'heroIdle01.png',
    'heroIdle02.png',
    'heroIdle03.png'
];

const persoWalkPath = 'image/perso/walk/';
const persoWalkArray = [
    'heroWalk00.png',
    'heroWalk01.png',
    'heroWalk02.png',
    'heroWalk03.png',
    'heroWalk04.png',
    'heroWalk05.png'
];

const otherImagePath = 'image/';
const otherImageArray = [
    'gear.png'
];

const imagesArray = [
    {
        path: backgroundPath,
        array: backgroundArray
    },
    {
        path: bombPath,
        array: bombArray
    },
    {
        path: explosionPath,
        array: explosionArray
    },
    {
        path: persoDeadPath,
        array: persoDeadArray
    },
    {
        path: persoIdlePath,
        array: persoIdleArray
    },
    {
        path: persoWalkPath,
        array: persoWalkArray
    },
    {
        path: otherImagePath,
        array: otherImageArray
    }
];

export default imagesArray;