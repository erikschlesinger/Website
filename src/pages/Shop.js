import { React, useState, useEffect } from 'react';
import '../format/OrderForm.css';
import banner from '../images/shop/shop_banner.png';
import TitlebarComponent from '../Titlebar.js';
import FusszeileComponent from '../Fusszeile.js';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";


function OrderForm() {
  // transfer user state 
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
  const [price, setPrice] = useState(39.99);
  const [storage, setStorage] = useState(sessionStorage.getItem('storage'));
  const [submitted, setSubmitted] = useState(false);

  // set sessionStorage to 10, if not yet initialized
  if (!sessionStorage.getItem('storage')) {
    sessionStorage.setItem('storage', 10);
  }

  // useEffect hook to update the storage and quantity state variables when the form is submitted and storage state changes
  useEffect(() => {
    sessionStorage.setItem('storage', storage); // update the sessionStorage when storage changes

    // update the quantity state depending on the new storage value
    if (submitted) {
      if (storage !== 0 && quantity > storage) {
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

  // useEffect hook to update the price state variable when the quantity state changes
  useEffect(() => {
    setPrice(Math.round(39.99 * quantity * 100) / 100);
  }, [quantity]);

  // function to handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    if (quantity <= storage) { // Check if there is enough storage
      if (address && zipCode && city && country && nameOnCreditCard && IBAN) { // Checking if all the form fields are filled
        // Show confirmation prompt
        const isConfirmed = window.confirm('Möchten Sie diese Bestellung wirklich absenden?');
        if (isConfirmed) {
          //update storage state and inform User
          console.log({ address, zipCode, city, country, quantity, price });
          setStorage(prevStorage => prevStorage - quantity);
          alert(`Bestellung erfolgreich!\nAnzahl: ${quantity} Flaschen\nKaufpreis: ${price} €`);
          setSubmitted(true); // set submitted flag to true
        }
      } else {
        alert('Bitte alle Felder ausfüllen');
      }
    }
    else {
      alert('Nicht genügend Flaschen auf Lager');
    }
  };

  // rendering the component
  return (
    <>
      <TitlebarComponent user={user}></TitlebarComponent>
      <Container fluid>
        <Row>
          <Col xs={7} className='colDescriptions'>
            <img src={banner} alt="image description" className='banner' />
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
      <FusszeileComponent user={user}></FusszeileComponent>
    </>
  );
}

export default OrderForm;