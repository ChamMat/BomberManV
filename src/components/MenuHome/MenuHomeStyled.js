import styled from 'styled-components';

const MenuHomeStyled = styled.div`
  border: solid 1vh black;
  background: rgba(255,255,255,.5);
  border-radius: 6px;
  height: 10vh;
  width: 50vw;
  animation-name: resize;
  animation-duration: .5s;
  animation-fill-mode:forwards;

  .menuHomeWrapper {
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

    ul {
      text-align: center;

      li{
        margin-bottom: 2vh;
      }
    }

    .gameList{
      height: 7vh;
      width: 75vw;
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

export default MenuHomeStyled;
