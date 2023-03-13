import React from "react";
import styled from "styled-components";
import './App.css';
import './Titlebar.css'
import { clickTest } from "./ClickFunctionTest";
//import WMT from './Wise_mystical_tree.jpg';
import Flasche from './Flaschenlogo.png';
import Logo from './CompanyLogo.png';
import Banner from './_Banner_Neu.png'
import Logout from './logout.png'

//Hello
//Hello 2


const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer
  outline: 0
  box-shadow: 0px 2px 2px lightgray;
`;



function App() {
  return (
    <>
    <div className="App">
      <div class="topnav">
        <pic class="picture" href=" "><img src={Flasche} className="App-logo_fl" alt="logo-abbildung"/></pic>
        <a class="active" href="#home">Home</a>
        <a href="#news">Neuigkeiten</a>
        <a href="#contact">Kontakt</a>
        <a href="#about">Über uns</a>
        <logout href="#logout">Logout</logout>
      </div>

        <a href="/"><img src={Banner} className="App-banner" alt="logo der Flasche"/></a>
        <header>  
          <a href="/"><img src={Logo} className="App-logo" alt="Abbildung der Flasche"/></a>
          <p>
            <code>Jetzt vorbestellen!</code>
          </p>
            <Button onClick={clickMe}>Für 39,99€ bestellen</Button>
            <button type="button" onClick={clickTest}> Test </button>
          <p>
            <code>Noch im Lager: { 10 + 5 } Stück</code>
          </p>
          </header>
        <a
          className="App-link"
          href="https://www.kfw.de/Bilder/Karriere/Bilder-2021/Ausbildung-Duales-Studium/Ramzan-Dadiev_696x392.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Das wird die 1,0 Jungs
        </a> 
    </div>

    </>
  );
}

function clickMe() {
  alert("Der Shop ist zurzeit leider nicht verfügbar!");
}

export default App;
