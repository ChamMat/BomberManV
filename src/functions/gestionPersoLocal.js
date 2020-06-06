import platforms from 'datas/platforms';

import majKeyLocal from './gestionPersoLocal/majKeyLocal';

const gestionPersoLocal = (perso, keyInput, newBomb, bombesId, nouvelleBombe) => {
    let {
        actif,
        mort,
        localId,
        name,
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
        repos,
        reposBombe,
        keys,
        playerBomb,
    } = perso;


    playerBomb.bombeMax += nouvelleBombe;

    if (!mort) {

        const vitesse = .7;
        // const vitesse = .1;
        const gravite = 2;
        

        // -------------MAJ des KEYS pour les joueurs locaux-------------------

        let {
            up,
            left,
            right,
            bomb,
        } = majKeyLocal(localId, keyInput)

        // ---------------GESTION DES ETATS------------------



            // --------------- GESTION DE L'IDLE (état statique)----------------
        if (!up && !left && !right && jumpPower === 0) {
            idle = true;
            walk = false;
            jump = false;
        }

        // ---------------- GESTION DU SAUT

            // ---- Getion du repos de saut

            // La notion de repos sert à éviter l'effet de ressort. Cad que le joueur est obligé
            // de lacher le bouton de saut pour pouvoir rééfectuer un 2eme saut.
        if (!up) {
            // Si le joueur n'appui pas sur le bouton de saut, repos passe à true.
            repos = true;
        }else {
            // Du coup, si le joueur veut sauter, il ne peut le faire que si repos est à true
            if (repos){
                up = true;
            }else {
                up = false;
            }
            // Dés que le joueur à effectué un saut, repos passe à false. Le joueur devra relacher le bouton pour remetttre
            // la variable repos à true.
            repos = false;
        }
            
            // ----- Gestion du saut:

            // Le joueur qui chute est soumis à la gravité et tombe de posY + gravité à chaque tilt (gravité définir L37)
            // Lorsque celui ci veut effectuer un saut, il "tombe" de posY + gravité - jumpPower.

            // Du coup, si le joueur veut effectuer un saut, il doit impérativement remplir ces condition:
            // il ne doit pas être en train de chuter, JumpPower doit impérativement être à 0

            // Concrétement, le joueur ne peu sauter que dans le cas où il est a terre.

        if (up && jumpPower === 0 && !chute) {
            jumpPower = 5;
            jump = true;
            idle = false;
            walk = false;
            posY -= 2.6;
        }


        // -------------------GESTION DES DEPLACEMENT

        if (left || right) {
            idle = false;
            // Si le personnage n'est pas en train de sauter, mettre l'animation de marche sinon mettre l'animation de saut
            if (jumpPower === 0) {
            walk = true;
            jump = false;
            } else {
                walk = false;
                jump = true;
            }
            // Le personnage peut tout de même se déplacer même si il est en train de sauter.
            if (left) {
                direction = 'left';
                posX -= vitesse;
            }
            if (right) {
                direction = 'right';
                posX += vitesse;
            }
        }


        // ----------------Gestion de l'animation de l'idle et de la marche-----------------
        if (idle) {
            // Selection de l'image en fonction de la dernière selectionné.
            // Si le perso était en train de sauter ou de marcher, C'est l'idle0 qui est séléctionné
            switch(idleImg) {
                case 'idle0':
                    if (tempo >= 4){
                        tempo = 0;
                        idleImg = 'idle1';
                    }else{
                        tempo += 1;
                    }
                    // console.log("idle1")
                    break;
                case 'idle1':
                    if (tempo >= 4){
                        idleImg = 'idle2';
                        tempo = 0;
                    }else{
                        tempo += 1;
                    }
                    // console.log("idle2")
                    break;
                case 'idle2':
                    if (tempo >= 4){
                        idleImg = 'idle3';
                        tempo = 0;
                    }else{
                        tempo += 1;
                    }
                    // console.log("idle3")
                    break;
                case 'idle3':
                    if (tempo >= 4){
                        idleImg = 'idle0';
                        tempo = 0;
                    }else{
                        tempo += 1;
                    }
                    // console.log("idle4")
                    break;
                default:
                    idleImg='idle0';
                    tempo = 0;
            }
            //La temporisation sert à ne changer l'image de l'idle que tout les deux frame
        }

        if (walk) {
            switch (walkImg) {
                case 'walk0':
                    if (tempo >= 2)
                    {
                        walkImg = 'walk1';
                        tempo = 0;
                    } else {
                        tempo +=1;
                    }
                break;
                case 'walk1':
                    if (tempo >= 2)
                    {
                        walkImg = 'walk2';
                        tempo = 0;
                    } else {
                        tempo +=1;
                    }
                break;
                case 'walk2':
                    if (tempo >= 2)
                    {
                        walkImg = 'walk3';
                        tempo = 0;
                    } else {
                        tempo +=1;
                    }
                break;
                case 'walk3':
                    if (tempo >= 2)
                    {
                        walkImg = 'walk4';
                        tempo = 0;
                    } else {
                        tempo +=1;
                    }
                break;
                case 'walk4':
                    if (tempo >= 2)
                    {
                        walkImg = 'walk0';
                        tempo = 0;
                    } else {
                        tempo +=1;
                    }
                break;
                default:
                    walkImg = 'walk0';
                    tempo = 0;
            }
        }

        // ----------------Gestion de la pose de nouvelle bombe

            // repos bombe fonctionne sur le même principe que le repos pour les saut.
            // Permet d'éviter au joueur de poser 50 bombe par seconde en l'obligeant à lacher le bouton de pose de bombe


            // note: bomb est le boolean de la touche pour poser une bombe
        if (bomb && reposBombe && playerBomb.bombeMax > 0) {
            reposBombe = false;
            const timerBombe = playerBomb.timer;
            const posXBombe = posX + 1;

            newBomb({
                id: bombesId,
                proprio: localId,
                active: true,
                posX: posXBombe,
                posY,
                timerBombe,
                chute: true,
                temporisationAnimation: 0,
                image: 'bombe0',
                explosion: false,
                danger: false,
            });
            playerBomb.bombeMax -=1;
        }

        if (!bomb) {
            reposBombe = true;
        }

    // Par default le joueur est toujours en train de chuter.
    // On annule la chute seulement si le perso est sur une plateforme

        chute = true;

        // JumpPower perd de la puissance à chaque tilt.
        // il ne peut pas devenir négatif.
        jumpPower -= .3; 
        if (jumpPower < 0) {
            jumpPower = 0;
        }

        const playerFoot = posY + 5;

    // ################# Gestion des collisions des plateforms

        // --------- On répète cette algo pour chaque plateforme.

        Object.values(platforms.platforms).forEach((platform) => {
            const platTop = parseInt(platform.top);
            const platLeft = parseInt(platform.left);
            const platHeight = parseInt(platform.height);
            const platWidth = parseInt(platform.width);


            // D'abord on regarde si le personnage est sur une plateforme en X
            if (posX > platLeft -2.3 && posX < platLeft + platWidth -.3) {

                // Si le personnage est au dessu ou en dessou d'une plateforme, on regarde si est en dessous ou au dessus

            if (playerFoot > platTop -1 && playerFoot -1 < parseInt(platTop) + parseInt(platHeight)) {
                // Ici, on est sur une plateform
                chute = false;
                jumpPower = 0;
                // Cette ligne sert à mettre tout les perso sur le même niveau
                posY = platTop - 5.2;
                    // posY = platTop;
            }
            if (posY >= platTop && posY <= parseInt(platTop) + parseInt(platHeight)){
                // ici la tête du perso tape une plateforme
                // On ne mêt pas jumpPower à 0 pour éviter une chute trop brutal
                if (jumpPower >= 2.5) {
                    jumpPower = 2.5;
                }
            }

            }
        });

        // Gestion des collisions en sortie de cadre
            //Gauche
        if (posX < 4) {
            posX = 4;
        }
            //Droite
        if (posX > 93) {
            posX = 93;
        }

        // ---------- GESTION DE LA CHUTE
        if (chute) {
            posY += gravite - jumpPower;
        }
    } else {

        idle = true;
        walk = false;
        jump = false;

        switch (idleImg) {

            case "mort0":
                if (tempo === 4){
                    idleImg = "mort1";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort1":
                if (tempo === 4){
                    idleImg = "mort2";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort2":
                if (tempo === 4){
                    idleImg = "mort3";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort3":
                if (tempo === 4){
                    idleImg = "mort4";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort4":
                if (tempo === 4){
                    idleImg = "mort5";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort5":
                if (tempo === 4){
                    idleImg = "mort6";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort6":
                if (tempo === 4){
                    idleImg = "mort7";
                    tempo = 0;
                }else{
                    tempo +=1;
                }
            break;
            case "mort7":
                if (tempo === 4) {
                    actif = false;
                }else {
                    tempo +=1;
                }
            break;

            default:
                idleImg = "mort0";
                tempo = 0;
        }
        
    }


    return {
        actif,
        mort,
        localId,
        name,
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
        repos,
        reposBombe,
        keys,
        playerBomb,
    };
};

export default gestionPersoLocal;