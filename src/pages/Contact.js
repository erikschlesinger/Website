import React from "react";
import '../format/App.css';
import '../format/Contact.css';
import styled from "styled-components";
import TitlebarComponent from '../Titlebar.js';
import FusszeileComponent from '../Fusszeile.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const user = location.state?.user;

  const clickSubmit = () => {
    alert("Vielen Dank deine Anfrage! Du wirst in Kürze von uns hören");
  }

  return (
    <>
      <TitlebarComponent user={user}></TitlebarComponent>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}><Form>
            <div className="request-form">
              <Form.Group className="mx-2 mb-3">
                <Form.Label className="mt-2" id="labelTitel"><b>Wozu hast du eine Frage?</b></Form.Label>
                <p><Form.Text className="text-muted">
                  Die Einordnung deiner Frage hilft uns dabei schneller auf dein Anliegen reagieren zu können! :^)
                </Form.Text></p>
                <Form.Select>
                  <option>Fragen zum Produkt</option>
                  <option>Fragen zum Unternehmen</option>
                  <option>Produktbeschwerden</option>
                  <option>Rücksendungen</option>
                  <option>Versandprobleme</option>
                  <option>Erstattungen</option>
                  <option>Kooperation</option>
                  <option>Sonstiges</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mx-2 mb-3" controlId="formBasicEmail">
                <b><Form.Label>Email Adresse</Form.Label></b>
                <Form.Control type="email" placeholder="Gib bitte deine E-Mail Adresse an." />
                <Form.Text className="text-muted">
                  Keine Sorge. Wir geben deine E-Mail an niemanden weiter!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mx-2 mb-3" controlId="exampleForm.ControlTextarea1">
                <b><Form.Label>Deine Nachricht</Form.Label></b>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div id="submitButton">
                <Submit onClick={clickSubmit}>Abschicken</Submit>
              </div>
            </div>
          </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <p><br /></p>
      <FusszeileComponent user={user}></FusszeileComponent>
    </>
  )
}

const Submit = styled.button`
  background-color: rgb(79, 166, 71);
  float: center;
  color: white;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 10px 5px;
  outline: 0;
  box-shadow: 2px 2px 0px lightgray;
  cursor: url(Pointer_32_x_32.png) 10 0, pointer`

export default Contact;
