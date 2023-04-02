import React from "react";
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import '../format/general.css'

class Impressum extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Titlebar_Component></Titlebar_Component>
        <div className="text-format">
          <strong>Angaben zur Gesellschaft:<br /></strong>
          <a><dfn>Die Flaschen AG</dfn><br /></a>
          <a><dfn>Am Flaschenplatz 3a</dfn><br /></a>
          <a><dfn>10247 Berlin</dfn><br /></a>
          <a><br /></a>
          <a>Telefon: <dfn>+(49) 30 50081-01</dfn><br /></a>
          <a>Fax:<dfn> +(49) 30 50081-02</dfn><br /></a>
          <a>E-Mail: <a
            className="general-link"
            href="mailto:info@flaschen-ag.de"
            target="_blank"
            rel="noopener noreferrer">
            <dfn>info@flaschen-ag.de</dfn></a><br /></a>
          <a>Internet: <a
            className="general-link"
            href="http://localhost:3000/"
            target="_self"
            rel="noopener noreferrer"
            color="#07a837">
            <dfn>www.flaschen-ag.de</dfn></a><br /></a>
          <a><br /></a>
          <a>Geschäftsführung: <dfn>Erik Schlesinger (CEO)</dfn><br /></a>
          <a>Gesellschaftler: <dfn>ppa. Dominik Lau (CSO), ppa. Ramzan Dadiev (CTO), i.V. Celina Bott (CPO)</dfn><br /></a>
          <a>Handelsregister: <dfn>Amtsgericht Berlin, Abteilung B, Nr. 8236</dfn><br /></a>
          <a><br /></a>
          <a>Umsatzsteuer-ID-Nr.:<dfn> DE 119631149</dfn></a>
          <a><br /></a>
          <a><br /></a>
          <a><br /></a>
          <a><br /></a>
        </div>
        <p><br /></p>
        <Fusszeile_Component></Fusszeile_Component>
      </>
    );
  }
}

export default Impressum;
