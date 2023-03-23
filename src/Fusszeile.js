import React, {Component, useState} from "react";
import './Fusszeile.css';



class Fusszeile extends React.Component {

    render(){
        return(
        <div class="navbar">
          
          <a href="#home" class="active">Home</a>
          <a href="AGBs">AGBs</a>
          <a href="Contact">Contact</a>

          <a href="Impressum">Impressum</a>
          </div>
        )
      }
};

export default Fusszeile;