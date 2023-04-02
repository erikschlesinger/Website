import React from "react";
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import '../format/general.css'

class News extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Titlebar_Component></Titlebar_Component>
        <div className="text-format">
          <strong>News<br /></strong>

        </div>
        <div>
          <Fusszeile_Component></Fusszeile_Component>
        </div>
      </>
    );
  }
}

export default News;
