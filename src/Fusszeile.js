import React, {Component, useState} from "react";
import './Fusszeile.css';


class Fusszeile extends React.Component {

    constructor() {
      super();
    }

    render(){
        return(
<div class="navbar" id="myNavbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
</div>

)
}
};

export default Fusszeile;