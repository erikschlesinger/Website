import React, { useState, useEffect } from 'react';
import '../format/OrderForm.css';
import Logo from '../images/general/CompanyLogo.png';

function OrderForm() {
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [nameOnCreditCard, setNameOnCreditCard] = useState('');
  const [IBAN, setIBAN] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(40);
  const [storage, setStorage] = useState(100);

  useEffect(() => {
    setPrice(40 * quantity);
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem('storage', storage);
  }, [storage]);

  const increaseQuantity = () => {
    if (quantity < storage) {
      setQuantity(prevQuantity => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) { // check if current quantity is greater than 1
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (address && zipCode && city && country) {
      if (quantity > storage) {
        alert('Not enough storage');
      } else {
        // Show confirmation prompt
        const isConfirmed = window.confirm('Are you sure you want to submit this order?');
        if (isConfirmed) {
          console.log({ address, zipCode, city, country, quantity, price });
          setStorage(prevStorage => prevStorage - quantity);
          alert(`Order successful. Quantity: ${quantity} Flaschen`);
        }
      }
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src={Logo} alt="Your Image" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <form>


            <form className="order-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" value={address} onChange={event => setAddress(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code:</label>
                <input type="text" id="zipCode" value={zipCode} onChange={event => setZipCode(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" value={country} onChange={event => setCountry(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="nameOnCreditCard">Name on creditcard:</label>
                <input type="text" id="nameOnCreditCard" value={nameOnCreditCard} onChange={event => setNameOnCreditCard(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="IBAN">IBAN:</label>
                <input type="text" id="IBAN" value={IBAN} onChange={event => setIBAN(event.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-input">
                  <button type="button" onClick={decreaseQuantity}>-</button>
                  <input type="number" id="quantity" value={quantity} onChange={() => { }} max={storage} readOnly />
                  <button type="button" onClick={increaseQuantity}>+</button>
                </div>
                <div className="storage">
                  Storage: {storage}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" value={price} disabled />
              </div>
              <button type="submit">Submit Order</button>
            </form>


          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;