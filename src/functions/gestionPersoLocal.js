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

    if (!up && !left && !right) {
        idle = true;
        walk = false;
    }

    // Si gauche ou droite: WALK
    if (left || right) {
        idle = false;
        walk = true;
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

    // Gestion des collisions en sortie de cadre
        //Gauche
    if (posX < 2) {
        posX = 2;
    }
        //Droite
    if (posX > 95) {
        posX = 95;
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
        keys,
    };
};

export default gestionPersoLocal;