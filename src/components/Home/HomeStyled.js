import styled from 'styled-components';


const HomeStyled = styled.div`

    height: 100vh;

    .homeWrapper{
        height: 100vh;
        padding: 5vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        text-align:center;
        font-size: 6vh;
    }

    .button{
        font-family: 'PressStart2P';
        font-size: 3vh;
        border: solid 1vh black;
        background: rgba(255,255,255,.5);
        border-radius: 6px;

        &:hover {
            border-color: #999;
            font-size: 3.2vh;
        }
    }

    .loadEnd{
      height: 10vh;
      width: 50vw;
    }

`;

export default HomeStyled;
