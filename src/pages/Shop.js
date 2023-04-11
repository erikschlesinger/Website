import { React, useState, useEffect } from 'react';
import '../format/OrderForm.css';
import Logo from '../images/general/CompanyLogo.png';
import Skizze_v1 from '../images/AboutUS/Flasche_erste_Skizze.png'
import Titlebar_Component from '../Titlebar.js';
import Fusszeile_Component from '../Fusszeile.js';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";


function OrderForm() {
  const location = useLocation();
  const user = location.state?.user;
  // Setting up state variables
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [nameOnCreditCard, setNameOnCreditCard] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(40);
  const [storage, setStorage] = useState(10);
  const [submitted, setSubmitted] = useState(false);

  // useEffect hook to update the price state variable when the quantity state changes
  useEffect(() => {
    setPrice(40 * quantity);
  }, [quantity]);

  // useEffect hook to update the storage and quantity state variables when the form is submitted and storage state changes
  useEffect(() => {
    localStorage.setItem('storage', storage); // Set new Storage
    // update the quantity state depending on the new storage value
    if (submitted) {
      if (storage !== 0) {
        setQuantity(storage);
      } else {
        setQuantity(1);
      }
      setSubmitted(false);
    }
  }, [storage, submitted]);

  // function to increase the quantity state variable
  const increaseQuantity = () => {
    if (quantity < storage) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  // function to decrease the quantity state variable
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  // function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    if (address && zipCode && city && country && nameOnCreditCard && IBAN) { // Checking if all the form fields are filled
      if (quantity > storage) { // Check if there is enough storage
        alert('Nicht genügend Flaschen auf Lager');
      } else {
        // Show confirmation prompt
        const isConfirmed = window.confirm('Möchten Sie diese Bestellung wirklich absenden?');
        if (isConfirmed) {
          //update storage state and inform User
          console.log({ address, zipCode, city, country, quantity, price });
          setStorage(prevStorage => prevStorage - quantity);
          alert(`Bestellung erfolgreich!\nAnzahl: ${quantity} Flaschen\nKaufpreis: ${price} €`);
          setSubmitted(true); // set submitted flag to true
        }
      }
    } else {
      alert('Bitte alle Felder ausfüllen');
    }
  };

  // rendering the component
  return (
    <>
      <Titlebar_Component user={user}></Titlebar_Component>
      <Container fluid>
        <Row>
          <Col xs={8} className='colDescriptions'>
            <img src={Logo} alt="Logo der Flasche" className='logo' />
            <img src={Skizze_v1} alt="Alternatives Logo der Flasche" className='skizze' />
          </Col>
          <Col className='colForm'>
            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="address">Straße und Hausnummer:</label>
                <input type="text" id="address" value={address} onChange={event => setAddress(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Postleitzahl:</label>
                <input type="text" id="zipCode" value={zipCode} onChange={event => setZipCode(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="city">Stadt:</label>
                <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Land:</label>
                <input type="text" id="country" value={country} onChange={event => setCountry(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="nameOnCreditCard">Name auf der Kredit-/Debitkarte:</label>
                <input type="text" id="nameOnCreditCard" value={nameOnCreditCard} onChange={event => setNameOnCreditCard(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="IBAN">IBAN:</label>
                <input type="text" id="IBAN" value={IBAN} onChange={event => setIBAN(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Anzahl:</label>
                <div className="quantity-input">
                  <button type="button" onClick={decreaseQuantity}>-</button>
                  <input type="number" id="quantity" value={quantity} onChange={() => { }} max={storage} readOnly />
                  <button type="button" onClick={increaseQuantity}>+</button>
                </div>
                <div className="storage">
                  Im Lager: {storage}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="price">Gesamtkosten:</label>
                <input type="currency" id="price" value={price + " €"} disabled />
              </div>
              <button type="submit">Bestellung aufgeben</button>
            </form>
          </Col>
        </Row>
      </Container>
      <Fusszeile_Component user={user}></Fusszeile_Component>
    </>
  );
}

export default OrderForm;