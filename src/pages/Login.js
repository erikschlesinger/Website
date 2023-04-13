import { useState, React } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../format/Login.css"
import { useNavigate, Link } from "react-router-dom";

function LoginButton() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); //State um Fehlermeldung ein/auszublenden
  const [showLogin, setShowLogin] = useState(true); //State um Login Fenster ein/auszublenden

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.toLowerCase() === "admin@flaschen-ag.de" && password === "admin") {
      navigate("/", { state: { user: "admin" } });
    } else {
      setShowPopup(true); //Popup Fenster einblenden
      setShowLogin(false); //Login Fenster ausblenden
    }
  }

  return (
    <div className="Auth-form-container">
      {showLogin && ( // showLogin-State auf das Login Fenster mappen
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
      {showPopup && ( // showPopup-State auf das Fehlermeldungs-Fenster mappen
        <div className="popup-content">
          <h3>Login Fehlgeschlagen</h3>
          <p>Bitte überprüfen Sie Ihren Benutzernamen und Ihr Passwort und versuchen es erneut.</p>
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginTop: "3%" }}
            // Login Fenster anzeigen / Fehlermeldung ausblenden
            onClick={() => setShowPopup(false) & setShowLogin(true)}>
            Zurück
          </button>
        </div>
      )}
    </div>
  )
}

export default LoginButton;