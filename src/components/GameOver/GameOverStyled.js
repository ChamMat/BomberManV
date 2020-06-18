import styled from 'styled-components';

const GameOverStyled = styled.div`
  position: absolute;
  margin: 15vh 7.5vw;
  border: solid 1vh black;
  background: rgba(255,255,255,.5);
  border-radius: 6px;
  height: 10vh;
  width: 50vw;
  animation-name: resize;
  animation-duration: .5s;
  animation-fill-mode:forwards;

  .GameOverWrapper {
    opacity: 0;
    animation-name: show;
    animation-duration: .5s;
    animation-delay: .5s;
    animation-fill-mode:forwards;

    h2{
      text-align: center;
      margin: 4vh auto 7vh;
      font-size: 5vh;
    }

    .message{
      text-align: center;
      margin-top: 15vh;
    }

    ul {
      display: flex;
      justify-content: space-around;
      margin-top: 20vh;

      li{
        margin-bottom: 2vh;
      }
    }

    .button{
      font-family: 'PressStart2P';
      font-size: 3vh;
      border: solid 1vh black;
      background: rgba(255,255,255,.5);
      border-radius: 6px;
      height: 10vh;
      width: 20vw;
      &:hover{
            border-color: #999;
            font-size: 3.2vh;
        }
    }
  }

  @keyframes resize {

    from {
      height: 10vh;
      width: 50vw;
    }

    to {
      height: 70vh;
      width: 85vw;
    }
  }

  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

`;

export default GameOverStyled;
