import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="Logo MeilleurTaux.com" className="Logo" />
        </Link>
        <h1>Crédit immobilier : 5 mn pour obtenir le meilleur taux</h1>
      </div>
    </header>
  );
};

export default Header;
