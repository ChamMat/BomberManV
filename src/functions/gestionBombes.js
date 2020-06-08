import platforms from 'datas/platforms';

const gestionBombes = (bombe, volume) => {

     // Ici notre logique des bombes:
     let {
        id,
        proprio,
        active,
        posX,
        posY,
        timerBombe,
        chute,
        temporisationAnimation,
        image,
        explosion,
        danger,
    } = bombe;

    const gravite = 2;
    const bombeGround = posY + 5;

    // ---------- GESTION DES COLISION AVEC LES PLATEFORMES
    if (chute) {
        Object.values(platforms.platforms).forEach((platform) => {
            const platTop = parseInt(platform.top);
            const platLeft = parseInt(platform.left);
            const platHeight = parseInt(platform.height);
            const platWidth = parseInt(platform.width);


            // D'abord on regarde si la bombe est sur une plateforme en X
            if (posX > platLeft -1 && posX < platLeft + platWidth -1) {

                // Si la bombe est au dessu ou en dessou d'une plateforme, on regarde si est en dessous ou au dessus

            if (bombeGround > platTop -1 && bombeGround -1 < parseInt(platTop) + parseInt(platHeight)) {
                // Ici, on est sur une plateform
                chute = false;
                posY = platTop + platHeight - 11;
            }

            }
        });

        posY += gravite;
    }
    
    // Maj du timer
    if (timerBombe <= 0 && !explosion) {
        explosion = true;
        danger = true;
        image ='explosion00';
        const explosionSon = new Audio('/son/DeathFlash.flac'); 
        explosionSon.volume = volume;
        explosionSon.play();
    } else {
        timerBombe -= 25;
    }

    // #############------ANIMATION-------###########
    temporisationAnimation += 1;

    switch(image) {
        case 'bombe0':
            if (temporisationAnimation >= 6) {
                image = 'bombe1';
                temporisationAnimation = 0;
            }
        break;
        case 'bombe1':
            if (temporisationAnimation >= 6) {
                image = 'bombe0';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion00':
            if (temporisationAnimation >= 4) {
                image = 'explosion01';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion01':
            if (temporisationAnimation >= 4) {
                image = 'explosion02';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion02':
            if (temporisationAnimation >= 4) {
                image = 'explosion03';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion03':
            if (temporisationAnimation >= 4) {
                image = 'explosion04';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion04':
            if (temporisationAnimation >= 4) {
                image = 'explosion05';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion05':
            if (temporisationAnimation >= 4) {
                image = 'explosion06';
                temporisationAnimation = 0;
                danger = false;
            }
        break;
        case 'explosion06':
            if (temporisationAnimation >= 4) {
                image = 'explosion07';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion07':
            if (temporisationAnimation >= 4) {
                image = 'explosion08';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion08':
            if (temporisationAnimation >= 4) {
                image = 'explosion09';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion09':
            if (temporisationAnimation >= 4) {
                image = 'explosion10';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion10':
            if (temporisationAnimation >= 4) {
                image = 'explosion11';
                temporisationAnimation = 0;
            }
        break;
        case 'explosion11':
            active = false;
        break;
        default:
        
            temporisationAnimation = 0;
    }


    // SI le timer tombe à 0, on n'ajoute pas la bombe au tableau
    // if (timerBombe !== 0 && !explosion){
        if (active){
        return ({
            id,
            proprio,
            active,
            posX,
            posY,
            timerBombe,
            chute,
            temporisationAnimation,
            image,
            explosion,
            danger,
        });
    }
    return proprio; // dans le cas ou la bombe est fini, on rend une bombe à son propriétaire

};

export default gestionBombes;