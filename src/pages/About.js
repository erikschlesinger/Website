import React from "react";
import Titlebar_Component from '../Titlebar';
import Fusszeile_Component from '../Fusszeile';
import '../format/general.css'
import Skizze_v1 from '../images/AboutUS/Flasche_erste_Skizze.png'
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <Titlebar_Component user={user}></Titlebar_Component>
      <div className="text-format ">
        <div className="text-Uebeschrift_center_1">
          Unsere Vision
        </div>
        <div className="text-Uebeschrift_center_2">
          Das Beste Trinkerlebnis für jede*n!
        </div>
        <a><br /></a>
        <a>
          <a><br /></a>
          Diese Vision ist fest in den Grundsteinen von der Flaschen AG verankert und wir kämpfen jeden Tag aufs neue dafür unsere Produkte immer mehr zu verbessern. <br />
          Aber lass uns ganz am Anfang der Geschichte beginnen:
        </a>
        <a><br /></a>
        <div className="text-Uebeschrift_center_3">
          2020
        </div>
        <a>
          Im Jahre 2020 haben wir uns über das Studium kennengelernt. Direkt war klar das dies die Leute waren mit welchen ich gern mein Startup umsetzen möchte.
          Nach längeren Brainstormen war klar das wir etwas einfaches konzipieren wollen. Etwas was bereits in Massen den Markt überschwemmt. Allerdings wollten wir nicht einfach etwas kopieren.
          Ganz im Gegenteil! Wir wollten etwas nehmen was bereits da ist uns es so kreativ wie möglich weiterdenken.
          <br /></a>
        <a>
          Dabei kamen wir schnell auf die Idee eine einfache Trinkflasche vollkommen neu zu überdenken. Dabei machten wir uns als ersten darüber gedanken welche zusätzlichen Gegenstände
          wir benötigen um Getränke herzustellen.
        </a><br />
        <div>
          <ul>
            <img src={Skizze_v1} className="pic-mid-full" alt="erste Skitze der Flasche" />
            <a>- einen Kühlschrank, um die Getränke abzukühlen</a><br />
            <a>- Einen Wasserkocher, um Getränke (z.B. Tee) zu erhitzen</a><br />
            <a>- Einen Standmixer, um Smothies oder Protheinshakes herzustellen</a><br />
            <a>- Einen Wasserfilter, um Kalkrückstände zu beseitigen</a><br />
          </ul><br />
          <a>Außerdem sollte die Flasche kommplett Nachhaltig, Vegan und Klimaneutral in Europa produziert werden</a><br />
          <a>
            Abschließend musste die Idee nur noch umgesetzt werden:
          </a><br />
        </div>
        <a><br /></a>
        <a><br /></a>
      </div>
      <Fusszeile_Component user={user}></Fusszeile_Component>
    </>
  );
}

export default About;
