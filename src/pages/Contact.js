import React from "react";
import styled from "styled-components";
import '../format/App.css';
import '../Titlebar.css';
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import Form from 'react-bootstrap/Form';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../format/Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Contact() {

  const clickSubmit = () => {
    alert("Vielen Dank deine Anfrage! Du wirst in Kürze von uns hören");
  }

  return (
    <>
      <Titlebar_Component></Titlebar_Component>
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
                <b><Form.Label>Email Addresse</Form.Label></b>
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
      <Fusszeile_Component></Fusszeile_Component>
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
