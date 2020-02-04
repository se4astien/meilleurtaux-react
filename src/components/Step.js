import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Step = props => {
  let result = Math.ceil((props.step / 8) * 100);
  return (
    <div className="step">
      {props.step !== 0 ? (
        <Link to={props.previous}>
          <p className="previous">Précédent</p>
        </Link>
      ) : (
        <p className="previous disabled">Précédent</p>
      )}
      <div className="bar-grey">
        <div className="bar-orange" style={{ width: result + "%" }} />
        <div className="back-round" style={{ left: result + "%" }}>
          <div className="round">{result}%</div>
        </div>
      </div>

      {props.state === undefined ? (
        <p
          className="next"
          onClick={() => {
            alert("Merci de sélectionner une des options");
          }}
        >
          Suivant
        </p>
      ) : (
        <Link to={props.next}>
          <p
            className="next"
            // Au clik sur suivant, on va sauvegarder le cookie
            onClick={() => {
              Cookies.set(props.nameCookie, props.valueCookie, { expires: 7 });
            }}
          >
            Suivant
          </p>
        </Link>
      )}
    </div>
  );
};

export default Step;
