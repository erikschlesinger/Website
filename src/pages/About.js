import React from "react";
import TitlebarComponent from '../Titlebar';
import FusszeileComponent from '../Fusszeile';
import '../format/general.css'
import Skizze_v1 from '../images/AboutUS/Flasche_erste_Skizze.png'
import { useLocation } from "react-router-dom";

function About() {
  //get user state 
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <TitlebarComponent user={user}></TitlebarComponent>
      <div className="text-format ">
        <div className="text-Uebeschrift_center_1">
          Unsere Vision
        </div>
        <div className="text-Uebeschrift_center_2">
          Das Beste Trinkerlebnis für jede*n!
        </div>
        <br />
        <p>
          <br />
          Diese Vision ist fest in den Grundsteinen von der Flaschen AG verankert und wir kämpfen jeden Tag aufs neue dafür unsere Produkte immer mehr zu verbessern. <br />
          Aber lass uns ganz am Anfang der Geschichte beginnen:
        </p>
        <br />
        <div className="text-Uebeschrift_center_3">
          2020
        </div>
        <p>
          Im Jahre 2020 haben wir uns über das Studium kennengelernt. Direkt war klar das dies die Leute waren mit welchen ich gern mein Startup umsetzen möchte.
          Nach längeren Brainstormen war klar das wir etwas einfaches konzipieren wollen. Etwas was bereits in Massen den Markt überschwemmt. Allerdings wollten wir nicht einfach etwas kopieren.
          Ganz im Gegenteil! Wir wollten etwas nehmen was bereits da ist uns es so kreativ wie möglich weiterdenken.
          <br />
        </p>
        <p>
          Dabei kamen wir schnell auf die Idee eine einfache Trinkflasche vollkommen neu zu überdenken. Dabei machten wir uns als ersten darüber gedanken welche zusätzlichen Gegenstände
          wir benötigen um Getränke herzustellen.
        </p>
        <div className="aboutUsImages">
          <ul>
            <li>Einen Kühlschrank, um die Getränke abzukühlen</li>
            <li>Einen Wasserkocher, um Getränke (z.B. Tee) zu erhitzen</li>
            <li>Einen Standmixer, um Smothies oder Protheinshakes herzustellen</li>
            <li>Einen Wasserfilter, um Kalkrückstände zu beseitigen</li>
          </ul><br/>
          <img src={Skizze_v1} className="pic-mid-full" alt="erste Skitze der Flasche" />
          </div>
          <p>Außerdem sollte die Flasche kommplett Nachhaltig, Vegan und Klimaneutral in Europa produziert werden</p>
          <p>Abschließend musste die Idee nur noch umgesetzt werden.</p>
        <br />
        <br />
      </div>
      <FusszeileComponent user={user}></FusszeileComponent>
    </>
  );
}

export default About;