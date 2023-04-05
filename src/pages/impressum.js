import React from "react";
import TitlebarComponent from '../Titlebar.js';
import FusszeileComponent from '../Fusszeile.js';
import '../format/general.css'
import { useLocation } from "react-router-dom";

function Impressum() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <TitlebarComponent user={user}></TitlebarComponent>
      <div className="text-format">
        <br />
        <strong>Angaben zur Gesellschaft:<br /></strong>
        <dfn>Die Flaschen AG</dfn><br />
        <dfn>Am Flaschenplatz 3a</dfn><br />
        <dfn>10247 Berlin</dfn><br />
        <br />
        Telefon: <dfn>+(49) 30 50081-01</dfn><br />
        Fax:<dfn> +(49) 30 50081-02</dfn><br />
        E-Mail: <a
          className="general-link"
          href="mailto:info@flaschen-ag.de"
          target="_blank"
          rel="noopener noreferrer">
          <dfn>info@flaschen-ag.de</dfn></a><br />
        Internet: <a
          className="general-link"
          href="http://localhost:3000/"
          target="_self"
          rel="noopener noreferrer"
          color="#07a837">
          <dfn>www.flaschen-ag.de</dfn></a><br />
        <br />
        Geschäftsführung: <dfn>Erik Schlesinger (CEO)</dfn><br />
        Gesellschaftler: <dfn>ppa. Dominik Lau (CSO), ppa. Ramzan Dadiev (CTO), i.V. Celina Bott (CPO)</dfn><br />
        Handelsregister: <dfn>Amtsgericht Berlin, Abteilung B, Nr. 8236</dfn><br />
        <br />
        Umsatzsteuer-ID-Nr.:<dfn> DE 119631149</dfn>
      </div>
      <br /><br /><br /><br />
      <FusszeileComponent user={user}></FusszeileComponent>
    </>
  );
}

export default Impressum;
