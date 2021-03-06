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
      background-color: rgb(55, 89, 34);
      /* border: solid .4vh #000; */
      border: solid .4vh black;
      border-radius: 3px;
  `;

export default StyledPlatform;