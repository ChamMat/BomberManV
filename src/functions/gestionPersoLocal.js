const gestionPersoLocal = (perso) => {
    let {
        id,
        posX,
        posY,
        direction,
        idle,
        walk,
        jump,
        idleImg,
        walkImg,
        tempo,
    } = perso;

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
                idleImg='idle1';
        }
        //La temporisation sert à ne changer l'image de l'idle que tout les deux frame
    }

    return {
        id,
        posX,
        posY,
        direction,
        idle,
        walk,
        jump,
        idleImg,
        walkImg,
        tempo,
    };
};

export default gestionPersoLocal;