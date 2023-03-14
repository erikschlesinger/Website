import React, {Component, useState} from "react";
import { ReactDOM } from "react";
import styled from "styled-components";
import './App.css';
import './Titlebar.css';
import { clickTest } from "./ClickFunctionTest";
//import WMT from './Wise_mystical_tree.jpg';
import Flasche from './Flaschenlogo.png';
import Logo from './CompanyLogo.png';
import Banner from './_Banner_Neu.png'
//import Logout from './logout.png'


class App extends React.Component {

  constructor() {
    super();
    this.state ={
      value: 30
    };
  }

  clickMe = () => {
    alert("Der Shop ist zurzeit leider nicht verfügbar!");
    alert(value);
    this.setState({value: value -= 1});
  }

    render(){
      return(
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
    </div>
      );
    }
  }


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

var value = 30;


export default App;
