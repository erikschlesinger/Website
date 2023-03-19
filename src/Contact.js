import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import { ReactDOM } from "react";
import styled from "styled-components";
import './App.css';
import './Titlebar.css';
import { clickTest } from "./ClickFunctionTest";
import Flasche from './images/general/Logo_Schriftzug.png';
import Logo from './images/general/CompanyLogo.png';
import Banner from './images/general/Banner.png';
import Logout from './images/general/logout.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';





class Contact extends React.Component {

  constructor() {
    super();
    this.state ={
      value: {value}
    };
  }

    render(){
      return(
      <div className="App">
      <div class="topnav">
        <pic class="picture" href="#home"><img src={Flasche} className="App-logo_fl" alt="logo-abbildung"/></pic>
        <a href="#news">Neuigkeiten</a>
        <a href="Contact">Kontakt</a>
        <a href="#about">Über uns</a>
        <a href="#shop">Kaufe jetzt deine Flasche!</a>
        <logout href="#loginlogout"><img src={Logout} className="Logout" alt="logo-abbildung"/></logout>
      </div>

        <a href="/"><img src={Banner} className="App-banner" alt="logo der Flasche"/></a>

{/*Unterhalb wird das Kontaktformular mithilfe der Bootstrapping Modules ausgeführt. Dieses wird in React benötigt (npm i bootstrap)
Danach können dann einzelne Elemente angepasst werden indem sie das "Form" Tag nutzen*/}
  
  <Form>
  <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
    )
  }
};




/*
const Button = styled.button`
  background-color: rgb(79, 166, 71);
  color: white;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 5px;
  outline: 0;
  box-shadow: 2px 2px 0px lightgray;
  cursor: url(Pointer_32_x_32.png) 10 0, pointer;
`;
*/

//Falls ihr den State für Value ändern wollt ändert das hier
var value = 5;


export default Contact;
