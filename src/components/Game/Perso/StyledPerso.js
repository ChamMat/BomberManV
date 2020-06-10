import styled from 'styled-components';
import idle0 from './idle/heroIdle00.png';
import idle1 from './idle/heroIdle01.png';
import idle2 from './idle/heroIdle02.png';
import idle3 from './idle/heroIdle03.png';

const StyledPerso = styled.div.attrs((props) => {
    const {
        posX,
        posY,
    } = props;

    return ({
        style: {
            top: (posY+.3) + 'vh',
            left: posX + 'vw',
            // transform: dir,
        },
    })})`

    position: absolute;
    display:flex;
    justify-content:center;
    overflow:none;

    .playerName {
        text-align:center;
        width:10vw;
        position:absolute;
        top: -3vh;
        font-weight:bold;
        text-transform:uppercase;
        overflow:hidden;
        font-size:2vh;
    }

    .wrapper {
        
        transform: ${props => props.direction === "right" ? "scaleX(1)" : "scaleX(-1)"};


        .idle0{
            background-image:url(${idle0});
        }
        .idle1{
            background-image:url(${idle1});
        }
        .idle2{
            background-image:url(${idle2});
        }
        .idle3{
            background-image:url(${idle3});
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

        .mort0 {
            background-image: url(/image/perso/mort/mort0.png);
        }
        .mort1 {
            background-image: url(/image/perso/mort/mort1.png);
        }
        .mort2 {
            background-image: url(/image/perso/mort/mort2.png);
        }
        .mort3 {
            background-image: url(/image/perso/mort/mort3.png);
        }
        .mort4 {
            background-image: url(/image/perso/mort/mort4.png);
        }
        .mort5 {
            background-image: url(/image/perso/mort/mort5.png);
        }
        .mort6 {
            background-image: url(/image/perso/mort/mort6.png);
        }
        .mort7 {
            background-image: url(/image/perso/mort/mort7.png);
        }



        .perso {
            width:5vh;
            height:5vh;
            background-size:contain;
            background-repeat:no-repeat;
            background-position:center;
        }
    }    
`;

export default StyledPerso;