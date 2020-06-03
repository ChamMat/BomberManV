import platforms from 'datas/platforms';

const gestionBombes = (bombe) => {

     // Ici notre logique des bombes:
     let {
        id,
        posX,
        posY,
        timerBombe,
        chute,
        temporisationAnimation,
        image,
    } = bombe;

    const gravite = 2;
    const bombeGround = posY + 5;

    // ---------- GESTION DES COLISION AVEC LES PLATEFORMES
    if (chute) {
        platforms.platforms.map((platform) => {
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
                posY = platTop + platHeight - 9;
            }

            }
        });

        posY += gravite;
    }
    
    // Maj du timer
    timerBombe -= 25;
    if (timerBombe <= 0) {
        timerBombe = 0;
    }

    // #############------ANIMATION-------###########
    temporisationAnimation += 1;

    switch(image) {
        case 'bombe0':
            if (temporisationAnimation >= 4) {
                image = 'bombe1';
                temporisationAnimation = 0;
            }
        break;
        case 'bombe1':
            if (temporisationAnimation >= 4) {
                image = 'bombe0';
                temporisationAnimation = 0;
            }
        break;
        default:
            image = 'bombe0';
            temporisationAnimation = 0;
    }




    // SI le timer tombe à 0, on n'ajoute pas la bombe au tableau
    if (timerBombe !== 0 ){
        return ({
            id,
            posX,
            posY,
            timerBombe,
            chute,
            temporisationAnimation,
            image,
        });
    }
    return false;

};

export default gestionBombes;