import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import { ReactDOM } from "react";
import styled from "styled-components";
import Titlebar_Component from './Titlebar.js';
import Fusszeile_Component from './Fusszeile.js';
import { clickTest } from "./ClickFunctionTest";
import Flasche from './images/general/Logo_Schriftzug.png';
import Logo from './images/general/CompanyLogo.png';
import Banner from './images/general/Banner.png';
import Logout from './images/general/logout.png';





class App extends React.Component {

  constructor() {
    super();
    this.state ={
      value: {value}
    };
  }

  clickMe = () => {
    if (value >= 1) {
      alert("Die Bestellung wurde dem Warenkorb hinzugefügt!");
      this.setState({value: value -= 1});
    }
    else {
      alert("Wir haben leider keine Produkte mehr auf Lager tut uns leid! :(")
      }
  }

    render(){
      return(
        <>
        <Titlebar_Component></Titlebar_Component>
      <div className="App">
        <header>  
          <a href="/"><img src={Logo} className="App-logo" alt="Abbildung der Flasche"/></a>
          <p>
            <code>Jetzt vorbestellen!</code>
          </p>
            <Button onClick={this.clickMe}>Für 39,99€ bestellen</Button>
            <button type="button" onClick={clickTest}> Test </button>
          <p>
            <code>Noch im Lager: {value} Stück</code>
          </p>
          </header>
        <a
          className="App-link"
          href="https://www.kfw.de/Bilder/Karriere/Bilder-2021/Ausbildung-Duales-Studium/Ramzan-Dadiev_696x392.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Test
        </a>
        <Fusszeile_Component></Fusszeile_Component>
    </div>
 
  </>   
      );
    }
  }


const Button = styled.button`
  background-color: rgb(79, 166, 71);
  color: white;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 5px;
  outline: 0;
  box-shadow: 2px 2px 0px lightgray;
  cursor: url(Pointer_32_x_32.png) 10 0, pointer;
`;

//Falls ihr den State für Value ändern wollt ändert das hier
var value = 5;


export default App;
