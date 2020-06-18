const handleLocalKey = (gameDatas, keyInputs) => {


    return gameDatas.map((perso)=>{
        let {
            up,
            left,
            right,
            down,
            jumpPause,
        } = perso;

        let newUp = up;
        let newLeft = left;
        let newRight = right;
        let newDown = down;
        let newJumpPause = jumpPause;


        switch(perso.id){
            case 0:
                perso.powerJump === 0 ? newUp = keyInputs.ArrowUp : newUp = false;
                newRight = keyInputs.ArrowRight;
                newDown = keyInputs.ArrowDown;
                newLeft = keyInputs.ArrowLeft;
            break;

            case 1:
                newUp = keyInputs.KeyW;
                newLeft = keyInputs.KeyA;    
                newRight = keyInputs.KeyD;    
                newDown = keyInputs.KeyS;    
            break;

            default:;
        }


        return {
            ...perso,
            up: newUp,
            left: newLeft,
            right: newRight,
            down: newDown,
            jumpPause: newJumpPause,
        }
        
    })

};

export default handleLocalKey;