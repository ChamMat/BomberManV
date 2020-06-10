import React, { useEffect } from 'react';
import StyledPreLoader from './StyledPreLoader';


const PreLoader = (props) => {

    const setLoadReady = props.setLoadReady;
    const handlePreloader = props.handlePreloader;

    useEffect(() => {
        window.addEventListener("load", handlePreloader);
      }, [setLoadReady, handlePreloader]);

    return (
    <StyledPreLoader>
        <div className="preloader">
        <div className="cache">
          <img className="background bleu" src="/image/background/country-platform-back.png" alt="fond bleu" />
          <img className="background foret" src="/image/background/country-platform-forest.png" alt="fond foret" />
          <div className="bomb0"/>
          <div className="bomb1"/>
          <div className="explosion1"/>
          <div className="explosion2"/>
          <div className="explosion3"/>
          <div className="explosion4"/>
          <div className="explosion5"/>
          <div className="explosion6"/>
          <div className="explosion7"/>
          <div className="explosion8"/>
          <div className="explosion9"/>
          <div className="explosion10"/>
          <div className="explosion11"/>
          <div className="explosion12"/>
          <div className="mort0"/>
          <div className="mort1"/>
          <div className="mort2"/>
          <div className="mort3"/>
          <div className="mort4"/>
          <div className="mort5"/>
          <div className="mort6"/>
          <div className="mort7"/>
          <div className="idle0" />
          <div className="idle1"/>
          <div className="idle2"/>
          <div className="idle3"/>
          <div className="walk0"/>
          <div className="walk1"/>
          <div className="walk2"/>
          <div className="walk3"/>
          <div className="walk4"/>
          <div className="walk5"/>
          <div className="engrenage"/>
        </div>
      </div>
        <div>Chargement, veuillez patienter</div>
    </StyledPreLoader>
    )};

export default PreLoader;