import styled from 'styled-components';

const StyledBomb = styled.div.attrs((props) => {
    const {
        posX,
        posY,
    } = props.props.datas;

    return ({
        style: {
            top: parseInt(posY + 2.5) + 'vh',
            left: posX + 'vw',
        },
})})`
    position: absolute;

    .bombe {
        width:2vw;
        height:3vw ;
        background-repeat: no-repeat;
        background-size:contain;
    }
    /* background-color:black; */
    /* border-radius:100%; */

    .bombe0 {
        background-image: url(/image/bomb/bomb0.png);
    }

    .bombe1 {
        background-image: url(/image/bomb/bomb1.png);
        width: 2.3vw;
        height: 3.6vw;
    }

    .explosion00 {
        background-image: url(/image/bomb/explosion1.png);
    }
    .explosion01 {
        background-image: url(/image/bomb/explosion2.png);
        width: 3vw;
        height: 3vw;
        position: relative;
        top: -.5vw;
        left: -.5vw;
    }
    .explosion02 {
        background-image: url(/image/bomb/explosion3.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion03 {
        background-image: url(/image/bomb/explosion4.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion04 {
        background-image: url(/image/bomb/explosion5.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion05 {
        background-image: url(/image/bomb/explosion6.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion06 {
        background-image: url(/image/bomb/explosion7.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion07 {
        background-image: url(/image/bomb/explosion8.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion08 {
        background-image: url(/image/bomb/explosion9.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion09 {
        background-image: url(/image/bomb/explosion10.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion10 {
        background-image: url(/image/bomb/explosion11.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    .explosion11 {
        background-image: url(/image/bomb/explosion12.png);
        width: 15vw;
        height: 15vw;
        position: relative;
        top: -11vw;
        left: -6.5vw;
    }
    
`;

export default StyledBomb;