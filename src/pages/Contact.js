import React from "react";
import '../format/App.css';
import '../format/Contact.css';
import TitlebarComponent from '../Titlebar.js';
import FusszeileComponent from '../Fusszeile.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  const user = location.state?.user;

  const clickSubmit = (event) => {
    event.preventDefault(); // prevent the form from submitting
    const emailInput = document.getElementById('emailInput');
    const messageInput = document.getElementById('messageInput');

    if (emailInput.value && messageInput.value) {
      alert('Vielen Dank für deine Anfrage! Du wirst in Kürze von uns hören.');
      emailInput.value = "";
      messageInput.value = "";
    } else {
      alert('Bitte fülle alle erforderlichen Felder aus.');
    }
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
                <Form.Control id="emailInput" type="email" placeholder="Gib bitte deine E-Mail Adresse an." />
                <Form.Text className="text-muted">
                  Keine Sorge. Wir geben deine E-Mail an niemanden weiter!
                </Form.Text>
              </Form.Group>

              <Form.Group className="mx-2 mb-3" controlId="exampleForm.ControlTextarea1">
                <b><Form.Label>Deine Nachricht</Form.Label></b>
                <Form.Control id="messageInput" as="textarea" rows={3} />
              </Form.Group>
              <div id="submitFormDiv">
                <button id="submitButton" onClick={clickSubmit}>Abschicken</button>
              </div>
            </div>
          </Form>
          </Col>
          <Col></Col>
        </Row>
        <br /><br />
      </Container>
      
      <FusszeileComponent user={user}></FusszeileComponent>
    </>
  )
}

export default Contact;
