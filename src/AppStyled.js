import styled from 'styled-components';

const AppStyled = styled.div`

    .fullScreen {
        position: absolute;
        height: 5vh;
        width: 5vh;
        top: 2vh;
        right: 2vw;
        border: solid 2px white;
        background-image: url(image/fullScreen.png);
        background-repeat: no-repeat;
        background-size:cover;
        cursor:pointer;
    }

    .fullScreenIsOn{
        background-image: url(image/exitFullScreen.png);
    }

`;

export default AppStyled;