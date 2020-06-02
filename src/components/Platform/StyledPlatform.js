import styled from 'styled-components';

const StyledPlatform = styled.div.attrs((props) => ({
    style: {
      top: props.top,
      left: props.left,
      height: props.height,
      width: props.width,
    },
  }))`
      position:absolute;
      background-color: #bdb483;
      border: solid 1px #354d48;
      border-radius: 3px;
  `;

export default StyledPlatform;