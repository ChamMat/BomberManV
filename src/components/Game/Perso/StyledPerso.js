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
    .idle1 {
        background-image: url(/image/perso/sprite/idle/heroIdle01.png);
    }
    .idle2 {
        background-image: url(/image/perso/sprite/idle/heroIdle02.png);
    }
    .idle3 {
        background-image: url(/image/perso/sprite/idle/heroIdle03.png);
    }

    .walk0 {
        background-image: url(/image/perso/sprite/walk/heroWalk00.png);
    }
    .walk1 {
        background-image: url(/image/perso/sprite/walk/heroWalk01.png);
    }
    .walk2 {
        background-image: url(/image/perso/sprite/walk/heroWalk02.png);
    }
    .walk3 {
        background-image: url(/image/perso/sprite/walk/heroWalk03.png);
    }
    .walk4 {
        background-image: url(/image/perso/sprite/walk/heroWalk04.png);
    }
    .walk5 {
        background-image: url(/image/perso/sprite/walk/heroWalk05.png);
    }

    .jump {
        background-image: url(/image/perso/sprite/walk/heroWalk01.png);
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