import styled from 'styled-components';

const PersoStyled = styled.div.attrs((props)=>{
    return (
    {
        style: {
            top: `${props.datas.posY}vh`,
            left: `${props.datas.posX}vw`,
        }
    }
)})`
    position:absolute;

    .playerName{
        position:absolute;
        font-size: 2vh;
        top:-3vh;
        left: -3.8vh;
    }

    img {
        transform: ${props => props.datas.direction === "right" ? "scaleX(1)" : "scaleX(-1)"};
        height: 5vh;
        width: 5vh;
    }

`;

export default PersoStyled;