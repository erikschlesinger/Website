import React from "react";
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import '../format/general.css'

class Shop extends React.Component {
    constructor() {
        super();
      }

    render(){
      return(
        <>
        <Titlebar_Component></Titlebar_Component>
          <div className="text-format">
                <strong>Shop<br /></strong>
                

            </div>
        <Fusszeile_Component></Fusszeile_Component>
        </>   
      );
    }
}

export default Shop;
