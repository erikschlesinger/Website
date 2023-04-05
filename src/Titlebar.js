import React from "react";
import './Titlebar.css';
import Flasche from './images/general/Logo_Schriftzug.png';
import Logout from './images/general/logout.png';
import Banner from './images/general/Banner.png';
import { useNavigate } from "react-router-dom";

function Titlebar(props) {
  const navigate = useNavigate();
  const handleNavigate = (navPath) => {
    navigate(navPath, { state: { user: props.user } });
  }

    return (
      <div className="Titlebar">
        <div className="topnav">
          <pic className="picture" href="#home"><img src={Flasche} className="App-logo_fl" alt="logo-abbildung" /></pic>
          <a href="javascript:void(0);" onClick={() => handleNavigate("/App")}>Startseite</a>
          <a href="javascript:void(0);" onClick={() => handleNavigate("/Contact")}>Kontakt</a>
          <a href="javascript:void(0);" onClick={() => handleNavigate("/About")}>Über uns</a>
          <a href="javascript:void(0);" onClick={() => handleNavigate("/Shop")}>Kaufe jetzt deine Flasche!</a>
          <a href="javascript:void(0);" onClick={() => handleNavigate("/")}><img src={Logout} className="Logout" alt="logo-abbildung" /></a>
          <a>Angemeldet als {props.user}</a>
        </div>
        <a href="javascript:void(0);" onClick={() => handleNavigate("/App")}><img src={Banner} className="App-banner" alt="logo der Flasche" /></a>
      </div>
    )
  }

  export default Titlebar;