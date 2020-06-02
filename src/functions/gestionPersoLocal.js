import platforms from 'datas/platforms';

const gestionPersoLocal = (perso, keyInput) => {
    let {
        localId,
        posX,
        posY,
        direction,
        idle,
        walk,
        jump,
        idleImg,
        walkImg,
        tempo,
        jumpPower,
        chute,
        keys,
    } = perso;

    const {
        p1Up,
        p1Left,
        p1Right,
        p1Bomb,
        p2Up,
        p2Left,
        p2Right,
        p2Bomb,
    } = keyInput;

    const vitesse = 1.2;
    const gravite = 4;
    

    // MAJ des KEYS pour les joueurs locaux
    if (localId === 0) {
        keys = {
            up: p1Up,
            left: p1Left,
            right: p1Right,
            bomb: p1Bomb,
        };
    } else if (localId === 1) {
        keys = {
            up: p2Up,
            left: p2Left,
            right: p2Right,
            bomb: p2Bomb,
        };
    }

    const {
        up,
        left,
        right,
        bomb,
    } = keys

    if (!up && !left && !right && jumpPower === 0) {
        idle = true;
        walk = false;
        jump = false;
    }

    if (up && jumpPower === 0 && !chute) {
        jumpPower = 9;
        jump = true;
        idle = false;
        walk = false;
        posY -= 5;
    }


    // Si gauche ou droite: WALK
    if (left || right) {
        idle = false;
        if (jumpPower === 0) {
        walk = true;
        jump = false;
        } else {
            walk = false;
            jump = true;
        }
        if (left) {
            direction = 'left';
            posX -= vitesse;
        }
        if (right) {
            direction = 'right';
            posX += vitesse;
        }
    }


    // Gestion de l'animation de l'idle
    if (idle) {
        // Selection de l'image en fonction de la dernière selectionné.
        // Si le perso était en train de sauter ou de marcher, C'est l'idle0 qui est séléctionné
        switch(idleImg) {
            case 'idle0':
                if (tempo === 0){
                    idleImg = 'idle1';
                    tempo += 1;
                }else{
                    tempo = 0;
                }
                // console.log("idle1")
                break;
            case 'idle1':
                if (tempo === 0){
                    idleImg = 'idle2';
                    tempo += 1;
                }else{
                    tempo = 0;
                }
                // console.log("idle2")
                break;
            case 'idle2':
                if (tempo === 0){
                    idleImg = 'idle3';
                    tempo += 1;
                }else{
                    tempo = 0;
                }
                // console.log("idle3")
                break;
            case 'idle3':
                if (tempo === 0){
                    idleImg = 'idle0';
                    tempo += 1;
                }else{
                    tempo = 0;
                }
                // console.log("idle4")
                break;
            default:
                idleImg='idle0';
        }
        //La temporisation sert à ne changer l'image de l'idle que tout les deux frame
    }

    if (walk) {
        switch (walkImg) {
            case 'walk0':
                walkImg = 'walk1';
            break;
            case 'walk1':
                walkImg = 'walk2';
            break;
            case 'walk2':
                walkImg = 'walk3';
            break;
            case 'walk3':
                walkImg = 'walk4';
            break;
            case 'walk4':
                walkImg = 'walk5';
            break;
            default:
                walkImg = 'walk0';
        }
    }

    // Gestion des collisions des plateforms
    chute = true;
    jumpPower -= .7; 
    if (jumpPower < 0) {
        jumpPower = 0;
    }

    const playerHeight = 7;
    const playerWidth = 3;
    const playerFoot = posY + 7;

    // console.log("PLAYER X= ", posX);
    // console.log("PLAYERFOOT Y= ", playerFoot);
    // console.log('--------------');

    platforms.platforms.map((platform) => {
        // console.log("PLATFORME: ", platform.id);
        const platTop = parseInt(platform.top);
        const platLeft = parseInt(platform.left);
        const platHeight = parseInt(platform.height);
        const platWidth = parseInt(platform.width);

        // console.log('platform top: ', platTop);
        // console.log(parseInt(platTop - 5));

        if (posX > platLeft -2 && posX < platLeft + platWidth) {
        //    console.log("posX: ", posX, " plus grand que ", platLeft, " plat left ", " et plus petit que plat left+ plat witdh", (platLeft + platWidth));
           if (playerFoot > platTop -2 && playerFoot < parseInt(platTop + platHeight+2)) {
               chute = false;
               posY = platTop + platHeight - 7;
                // console.log("playerFoot: ", playerFoot, " plus petit que ", platTop, " platTop ", " et plus grand que platTop + 5", (parseInt(platTop - 5)));
           }
        }

        // console.log('---------');
    });

    // Gestion des collisions en sortie de cadre
        //Gauche
    if (posX < 2) {
        posX = 2;
    }
        //Droite
    if (posX > 95) {
        posX = 95;
    }

    if (chute) {
        posY += gravite - jumpPower;
    }

    if (posY > 80) {
        posY = 80;
        chute = false;
    }
    
    return {
        localId,
        posX,
        posY,
        direction,
        idle,
        walk,
        jump,
        idleImg,
        walkImg,
        tempo,
        jumpPower,
        chute,
        keys,
    };
};

export default gestionPersoLocal;