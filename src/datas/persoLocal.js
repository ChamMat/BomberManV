export default [
  {
    id:0,
    actif: true,
    mort:false,
    name:'player1',
    posX: 95,
    posY: 80,
    vitesse: 0.6,
    powerJump: 0,
    jumpPause: true,
    direction: 'left',
    action: 'idle',
    nbrImg: 0,
    tempoImg: 0,
    imageSrc: '',
    up: false,
    left: false,
    right: false,
    bomb: false,
    bombeMax: 1,
    timer: 1200,
  },
  {
    id:1,
    actif: true,
    mort:false,
    name:'player2',
    posX: 1,
    posY: 80,
    vitesse: 0.6,
    powerJump: 0,
    jumpPause: true,
    direction: 'right',
    action: 'idle',
    nbrImg: 0,
    tempoImg: 0,
    imageSrc: '',
    up: false,
    left: false,
    right: false,
    bomb: false,
    bombeMax: 1,
    timer: 1200,
  }
];