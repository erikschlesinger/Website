import { useState, React } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../format/Login.css"
import { useNavigate, Link } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); //State to toggle Error Window
  const [showLogin, setShowLogin] = useState(true); //State to toggle Login Window

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin@flaschen-ag.de" && password === "admin") { //Admin Account credentials
      navigate("/", { state: { user: "admin" } }); //successfull logn -> routing with user state
    } else {
      //If credentials wrong
      setShowPopup(true); //show Error Window
      setShowLogin(false); //hide Login Window
    }
  }

  return (
    <div className="Auth-form-container">
      {showLogin && ( // map showLogin-State to the Window
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Anmelden</h3>
            <div className="form-group mt-3">
              <label>Email Adresse</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email eingeben"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group mt-3">
              <label>Passwort</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Passwort eingeben"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Als <Link to="/" state={{ user: "Gast" }}><a href="javascript:void(0);">Gast anmelden</a></Link>
            </p>
          </div>
        </form>)}
      {showPopup && ( // map showPopup-State to Error Window
        <div className="popup-content">
          <h3>Login Fehlgeschlagen</h3>
          <p>Bitte überprüfen Sie Ihren Benutzernamen und Ihr Passwort und versuchen es erneut.</p>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "3%" }}
            // Show Login Window / Hide Error Window
            onClick={() => setShowPopup(false) & setShowLogin(true)}>
            Zurück
          </button>
        </div>
      )}
    </div>
  )
}

export default LoginButton;