import React from "react";
import { Link } from "react-router-dom";

const Mentions = () => {
  return (
    <footer>
      <div className="wrapper">
        <span>
          * Champ obligatoire -
          <span className="legalMention">Mentions Légales</span>
        </span>
      </div>
      <Link to="/Admin">
        <p style={{ color: "black" }}>Admin Screen</p>
      </Link>
    </footer>
  );
};

export default Mentions;
