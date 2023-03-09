import React, { useState } from "react";
import WMT from './Wise_mystical_tree.jpg';
import styled from "styled-components";
import './App.css';
import { clickTest } from "./ClickFunctionTest";
//import Header from './Header.js';

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
    <header className="App-header2">
        <a>It`s morbin time!</a>
      </header>
      <header className="App-header">
        <img src={WMT} className="App-logo" alt="logo" />
        <p>
          <code>Geisteskrank</code>
        </p>
          <Button onClick={clickMe}>Klicke mich!</Button>
          <button type="button" onClick={clickTest}> Test </button>
        <p>
          <code>Test-App { 5 + 5 }</code>
        </p>
        <a
          className="App-link"
          href="https://www.kfw.de/Bilder/Karriere/Bilder-2021/Ausbildung-Duales-Studium/Ramzan-Dadiev_696x392.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Das wird die 1,0 Jungs
        </a> 
      </header>
    </div>

    </>
  );
}

function clickMe() {
  alert("Es funktioniert!");
}

export default App;
