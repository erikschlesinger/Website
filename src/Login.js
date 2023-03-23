import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import "./index.js"
import { Navigate } from "react-router-dom";




class Login extends React.Component {

  saveInput = () => {
    var inputEm = document.getElementById("userEmail").value;
    var inputPw = document.getElementById("userPassword").value;
    alert(inputEm);
    alert(inputPw);
    if (inputEm == "hello@gmx.de" && inputPw == "root") {
      alert("Test");
      //return <Navigate to="/" replace={true} />;
    }
  }

  render() {
    return(
      

      <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  id="userEmail"
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email" />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  id="userPassword"
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password" />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary" onClick={this.saveInput}>
                  Login
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
    )
  }
}

export default Login;