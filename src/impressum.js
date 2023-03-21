import React, {Component, useState} from "react";
import Titlebar_Component from './Titlebar.js';
import Fusszeile_Component from './Fusszeile.js';
import './Impressum.css'

class Impressum extends React.Component {
    constructor() {
        super();
        this.state ={
          value: {value}
        };
      }

    render(){
      return(
        <>
        <Titlebar_Component></Titlebar_Component>
            <ul><ul>
                <strong>Angaben zur Gesellschaft:<br /></strong>
                <b>Adresse:<br /></b>
                <a>Die Flaschen AG<br /></a>
                <a>Am Flaschenplatz 3a<br /></a>
                <a>10247 Berlin<br /></a>
                <a><br /></a>
                <a>Telefon: +(49) 30 500-01<br /></a>
                <a>Fax: +(49) 30 500-02<br /></a>
                <a>E-Mail: info@faschen-ag.de<br /></a>
                <a>Internet:&nbsp;</a>
                <a
                    className="App-link"
                    href="http://localhost:3000"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="#07a837"
                >www.flaschen-ag.de<br /></a>
                <a><br /></a>
                <a>Geschäftsführung: Erik Schlesinger<br /></a>
                <a>Gesellschaftler: ppa. Dominik Lau, ppa. Ramzan Dadiev, i.V. Celina Bott<br /></a>
                <a>Handelsregister: Amtsgericht Berlin, Abteilung B, Nr. 8236<br /></a>
                <a><br /></a>
                <a>Umsatzsteuer-ID-Nr.: DE 119631149</a>
            </ul></ul>

        <Fusszeile_Component></Fusszeile_Component>
        </>   
      );
    }
}
  //Falls ihr den State für Value ändern wollt ändert das hier
  var value = 5;

export default Impressum;
