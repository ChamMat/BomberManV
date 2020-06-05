import styled from 'styled-components';

const StyledMusique = styled.div`

    .fondNoir{
        position: absolute;
        width:100vw;
        height:100vh;
        background-color: rgba(0,0,0,.8);
        top:0;
        left:0;
    }
    
    color:#C9B9C9;

    .icon {
        position: relative;
        top:2vh;
        left: 2vh;
        height:6vh;
        width: 6vh;
        background-color: gray;
        border-radius: 100%;
        background-image: url(/image/Engrenage.png);
        background-size:cover;
        cursor: pointer;
    }

    .menuModal {
        position:absolute;
        top: 10vh;
        left:25vw;
        width: 50vw;
        height: 80vh;
        border: black solid 1px;
        background-color: rgba(0,0,0, .5);
        border-radius: 3vw;
        border: solid 2vh black;
    }

    h2 {
        font-size: 6vh;
        margin: 4vh;
        text-align:center;
        font-weight: bold;
    }

    li {
        font-size: 3vh;
        margin-top: 6vh;
    }

    .optionText {
        margin-left: 8vw;
    }

    h3 {
        margin-left: 5vw;
        font-size:4vh;
    }

    .buttonMenu {
        text-align:center;
        margin: auto;
        margin-top: 8vh;
        width: 100%;

        & button {
            font-size: 3vh;
            width: 30vw;
            border: none;
            padding: 1vh;
            border-radius: 4px;
        }
    }


    .buttonVolume {
        margin-left: 2vw;
        height: 5vh;
        width: 5vh;
        font-weight: bold;
        font-size: 4vh;
    }

    .volume {
        margin-left: 4vw;
    }
`;

export default StyledMusique;