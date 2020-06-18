import styled from 'styled-components';

const BombStyled = styled.div.attrs((props)=>{
    return (
    {
        style: {
            top: `${props.datas.posY}vh`,
            left: `${props.datas.posX}vw`,
        }
    }
)})`
    position:absolute;

    img {
        position:absolute;
        left: -.3vw;
        height: 3vh;
        width: 2.3vw;
    }

    .litle{
        height: 3vh;
        width: 2.3vw;
    }

    .big {
        height: 4vh;
        width: 2.7vw;
    }

    .explode0{

    }
    .explode1{
        width: 2.7vw;
        height: 5vh;
        position: absolute;
        top: -1.5vh;
        left: -.5vw;
    }
    .explode2{
        width: 10vw;
        height: 17vh;
        position: relative;
        top: -12vh;
        left: -4.2vw;
    }
    .explode3{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode4{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode5{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode6{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode7{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode8{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode9{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode10{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }
    .explode11{
        width: 15vw;
        height: 25vh;
        position: relative;
        top: -20vh;
        left: -6.7vw;
    }

`;

export default BombStyled;