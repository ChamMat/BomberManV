const handleJump = (powerJump, up, chute ) => {

    if (powerJump === 0 && !chute){
        if (up){
            powerJump = 5.1;
        }

    }else{
        powerJump -= .3;
        if (powerJump < 0){
            powerJump = 0;
        }
    }

    return powerJump;
};

export default handleJump;