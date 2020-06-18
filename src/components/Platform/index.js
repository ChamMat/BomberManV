import React from 'react';

import StyledPlatform from './StyledPlatform';

const Platform = (props) => {
    const {
        top,
        left,
        height,
        width,
    } = props;
  return (
    <StyledPlatform 
        top = {`${top}vh`}
        left = {`${left}vw`}
        height = {`${height}vh`}
        width = {`${width}vw`}
    />
)};

export default Platform;