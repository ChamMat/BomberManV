import styled from 'styled-components';

const StyledHome = styled.div`
    position:absolute;

    height: 100vh;
    width:100vw;
    background-color: rgba(0,0,0,.8);

    color:#C9B9C9;


    h1 {
        text-align:center;
        margin-top: 3vh;
        font-size: 6vh;
        font-weight:bold;
        color: white;
    }

    .cadre {
        margin: 5vh auto;
        border: black solid 1px;
        width: 50vw;
        height: 80vh;
        background-color: rgba(0,0,0, .7);
        border-radius: 3vw;
        border: solid 2vh black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;


        button {
            font-size: 3vh;
            width: 30vw;
            border: none;
            padding: 1vh;
            border-radius: 4px;
        }
    }
`;

export default StyledHome;