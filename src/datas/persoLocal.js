export default {
    persosLocal: [
        {
          actif: true,
          mort:false,
          localId:0,
          name:'player1',
          posX: 0,
          posY: 0,
          direction: 'right',
          idle: true,
          walk: false,
          jump: false,
          idleImg: 'idle0',
          walkImg: 'walk0',
          tempo:0,
          jumpPower: 0,
          chute: false,
          repos: true,
          reposBombe: true,
          keys: {
            up: false,
            left: false,
            right: false,
            bomb: false,
          },
          playerBomb: {
            nbr: 3,
            timer: 3000,
          }
        },
        {
          actif: true,
          mort:false,
          localId:1,
          name: 'player2',
          posX: 100,
          posY: 0,
          direction: 'left',
          idle: true,
          walk: false,
          jump: false,
          idleImg: 'idle0',
          walkImg: 'walk0',
          tempo:0,
          jumpPower: 0,
          chute: false,
          repos: true,
          reposBombe: true,
          keys: {
            up: false,
            left: false,
            right: false,
            bomb: false,
          },
          playerBomb: {
            nbr: 3,
            timer: 3000,
          }
        }
      ],
};