import styled from 'styled-components';

const StyledBonus = styled.div.attrs((props)=>{
    return ({
style: {
    top: props.props.posY + 'vh',
    left: props.props.posX + 'vw',
}
})})`
    position:absolute;
    div {
        height: 3vh;
        width: 2.5vw;
        background: white;
        border:solid .5vh black;
        border-radius: 1vh 1vh 0 0;
        background-size:contain;
        background-position:center;
        background-repeat:no-repeat;
    }

    .bombBonus {
        background-image: url('/image/bomb/bomb0.png');
    }

    .speedBonus {
        &:after {
            width: 2vw;
            position: absolute;
            content:"S";
            font-size: 2vh;
            text-align: center;
            font-weight: bold;
            top: .7vh;
        }
    }


`;

export default StyledBonus;