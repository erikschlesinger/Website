import React from "react";
import './Fusszeile.css';



class Fusszeile extends React.Component {

    render(){
        return(
        <div className="navbar">
          
          <a href="/">Home</a>
          <a href="/Contact">Kontakt</a>
          <a href="/Impressum">Impressum</a>
          <a href="/AGBs">AGBs</a>
          </div>
        )
      }
};

export default Fusszeile;