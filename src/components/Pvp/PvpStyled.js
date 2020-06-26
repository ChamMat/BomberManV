import styled from 'styled-components';

const PvpStyled = styled.div`
    .buttonsMobil{
        position: absolute;
        width: 100vw;
        bottom: 1vh;

        .buttonMobilWrapper{
            display:flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 .2vw;
        }

        .buttonAction{
            display:flex;
            flex-direction: column-reverse;
        }

        .buttonLeft {
            &::after {
                position:absolute;
                content: "";
                height: 0;
                width: 0;
                top: 33vh;
                left: 5vw;
                background-color:transparent;
                border-top: 5vh solid transparent;
                border-bottom: 5vh solid transparent;
                border-right: 5vw solid rgba(255,255,255, 0.2);
            }
        }

        .buttonRight {
            &::after {
                position:absolute;
                content: "";
                height: 0;
                width: 0;
                top: 33vh;
                left: 20vw;
                background-color:transparent;
                border-top: 5vh solid transparent;
                border-bottom: 5vh solid transparent;
                border-left: 5vw solid rgba(255,255,255, 0.2);
            }
        }

        .buttonAction {
            &::after {
                position:absolute;
                content: "";
                height: 0;
                width: 0;
                top: 33vh;
                right: 5vw;
                background-color:transparent;
                border-right: 5vh solid transparent;
                border-left: 5vh solid transparent;
                border-top: 5vw solid rgba(255,255,255, 0.1);
            }
        }

        .buttonJump {
            &::after {
                position:absolute;
                content: "";
                height: 0;
                width: 0;
                top: 10vh;
                right: 5vw;
                background-color:transparent;
                border-right: 5vh solid transparent;
                border-left: 5vh solid transparent;
                border-bottom: 5vw solid rgba(255,255,255, 0.2);
            }
        }


        .buttonMobil{
            width: 15vw;
            height: 25vh;
            margin: .2vh;
            border: none;
            background-color: rgba(255,255,255,0.1);
        }
    }

    @media (min-width:1000px){
        .buttonsMobil{
            display:none;
        }
    }
`;

export default PvpStyled;