import React from 'react';
import LoadingStyled from './LoadingStyled';

import LoaderIcon from "react-loader-icon";

const Loading = () => {

  const documentHeight = document.documentElement.clientHeight*0.10

  return (
      <LoadingStyled>
          <div className="wrapper">
              <p>Loading... Please wait</p>
              <p>Use chrome browser for better experience</p>
              <LoaderIcon type={"cylon"} size={documentHeight} />
          </div>
      </LoadingStyled>
  )
};

export default Loading;
