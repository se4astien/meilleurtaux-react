import React from "react";
import { Link } from "react-router-dom";

const FinishScreen = props => {
  return (
    <div className="wrapper">
      <h2>Et voilà, le formulaire est terminé !</h2>
      <div className="folder">
        <p>
          Votre numéro de dossier est le :
          <span className="folder-number"> {props.folder}</span>
        </p>
      </div>
      <Link to="/Admin">
        <p style={{ color: "black", textDecoration: "underline" }}>
          Accédez au back office
        </p>
      </Link>
    </div>
  );
};
export default FinishScreen;
