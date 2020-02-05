import React from "react";

const FinishScreen = props => {
  return (
    <div className="wrapper">
      <h2>Et voilà, le formulaire est terminé !</h2>
      <div className="folder">
        <p>
          Votre numéro de dossier est le :
          <span className="folder-number">{props.dossier}</span>
          {console.log(props.dossier)};
        </p>
      </div>
    </div>
  );
};
export default FinishScreen;
