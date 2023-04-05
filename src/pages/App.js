import React from "react";
import styled from "styled-components";
import TitlebarComponent from '../Titlebar.js';
import FusszeileComponent from '../Fusszeile.js';
import Logo from '../images/general/CompanyLogo.png';
import { Link, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <TitlebarComponent user={user}></TitlebarComponent>
      <div className="App" >
        <header>
          <img src={Logo} className="App-logo" alt="Abbildung der Flasche" />
          <p>
            <code style={{ fontSize: 30 }}>Jetzt vorbestellen!</code>
            <p style={{ margin: 0 }}>
              <code>Nur noch 10 Stück auf Lager</code>
            </p>
          </p>
          <Link to="/Shop" state={{ user: user }}>
            <Button>Jetzt für 39,99€ bestellen</Button>
          </Link>
        </header>
        <FusszeileComponent user={user}></FusszeileComponent>
      </div>
    </>
  );
}

const Button = styled.button`
  background-color: rgb(79, 166, 71);
  color: white;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 5px;
  outline: 0;
  box-shadow: 2px 2px 0px lightgray;
  cursor: url(Pointer_32_x_32.png) 10 0, pointer;
`
export default App;
