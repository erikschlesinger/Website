import React from "react";
import './Fusszeile.css';
import { useNavigate } from "react-router-dom";

function Fusszeile(props) {

  const navigate = useNavigate();
  const handleNavigate = (navPath) => {
    navigate(navPath, { state: { user: props.user } });
  }

  return (
    <div className="navbar">

      <a href="javascript:void(0);" onClick={() => handleNavigate("/")}>Home</a>
      <a href="javascript:void(0);" onClick={() => handleNavigate("/Contact")}>Kontakt</a>
      <a href="javascript:void(0);" onClick={() => handleNavigate("/Impressum")}>Impressum</a>
      <a href="javascript:void(0);" onClick={() => handleNavigate("/AGBs")}>AGBs</a>
    </div>
  )
}

export default Fusszeile;