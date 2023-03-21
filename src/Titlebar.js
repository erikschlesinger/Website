import React, {Component, useState} from "react";
import './Titlebar.css';
import Flasche from './images/general/Logo_Schriftzug.png';
import Logout from './images/general/logout.png';
import Banner from './images/general/Banner.png';

class Titlebar extends React.Component {

    constructor() {
      super();
    }

    render(){
        return(
<div className="Titlebar">
<div class="topnav">
  <pic class="picture" href="#home"><img src={Flasche} className="App-logo_fl" alt="logo-abbildung"/></pic>
  <a href="/">Startseite</a>
  <a href="#news">Neuigkeiten</a>
  <a href="Contact">Kontakt</a>
  <a href="#about">Über uns</a>
  <a href="#shop">Kaufe jetzt deine Flasche!</a>
 <a href="Login"><img src={Logout} className="Logout" alt="logo-abbildung"/></a>
</div>
    <a href="/"><img src={Banner} className="App-banner" alt="logo der Flasche"/></a>
</div>
)
}
};

export default Titlebar;