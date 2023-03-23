import React, {Component, useState} from "react";
import './Fusszeile.css';



class Fusszeile extends React.Component {

    render(){
        return(
        <div class="navbar">
          
          <a href="App">Home</a>
          <a href="Contact">Contact</a>
          <a href="Impressum">Impressum</a>
          <a href="AGBs">AGBs</a>
          </div>
        )
      }
};

export default Fusszeile;