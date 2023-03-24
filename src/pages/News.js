import React, {Component, useState} from "react";
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import '../format/general.css'

class News extends React.Component {
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
          <div className="text-format">
                <strong>News<br /></strong>
                
                <a><br /></a>
                <a><br /></a>
                <a><br /></a>
            </div>
        <Fusszeile_Component></Fusszeile_Component>
        </>   
      );
    }
}
  //Falls ihr den State für Value ändern wollt ändert das hier
  var value = 5;

export default News;
