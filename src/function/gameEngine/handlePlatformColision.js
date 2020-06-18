// this function return [false, 0] if no collision
// else, if collision is true, then the function return true with the position when the collision is true

const handlePlatformColision = (posX, posY, height, width, platforms, gravite) => {

    posX = parseInt(posX) + parseInt(width/2);
    posY = parseInt(posY) + parseInt(height);

    let result = ['none', 0];

    platforms.platforms.forEach((platform) => {

        if (posX+1 > platform.left && posX-1 < parseInt(platform.left) + parseInt(platform.width)){

            if (posY - gravite < platform.top && parseInt(posY) + parseInt(gravite) > platform.top) {
                result = ['foot', platform.top];
            }

            if (posY-height - gravite < parseInt(platform.top) +1 && parseInt(posY-height) + parseInt(gravite) > parseInt(platform.top)) {
                result = ['head', platform.top];
            }
        }
    });

    return result;
};

export default handlePlatformColision;