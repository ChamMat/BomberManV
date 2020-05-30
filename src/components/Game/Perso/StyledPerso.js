import styled from 'styled-components';

const StyledPerso = styled.div.attrs((props) => {
    const {
        posX,
        posY,
        direction,
    } = props;

    // dir sert à orienter le personnage à gauche ou à droite grâce à un scaleX.
    let dir;
    if (direction === "right") {
        dir = 'scaleX(1)';
    }
    else {
        dir = 'scaleX(-1)';
    }

    return ({
        style: {
            top: posY + 'vh',
            left: posX + 'vw',
            transform: dir,
        },
})})`
    position: absolute;

    .idle0 {
        background-image: url(/image/perso/sprite/idle/heroIdle00.png);
    }

    .perso {
        width:3vw;
        height:7vh;
        background-size:contain;
        background-repeat:no-repeat;
        background-position:center;
    }
    
`;

export default StyledPerso;