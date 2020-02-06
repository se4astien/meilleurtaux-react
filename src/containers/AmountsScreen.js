import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import Mentions from "../components/Mentions";

const AmountScreen = props => {
  // Pour sauvegarder la page en cours
  Cookies.set("CurrentPage", "/AmountScreen", { expires: 7 });

  let notaryPrice = 0;

  // Si l'utilisateur achète dans le neuf
  if (props.etat === "Neuf") {
    notaryPrice = Math.round(props.amountProperty * (1.8 / 100));
  } else {
    // Sinon c'est dans l'ancien
    notaryPrice = Math.round(props.amountProperty * (7.38 / 100));
  }

  let total = 0;

  // S'il n'y a pas de travaux
  if (props.amountWorks === undefined) {
    total = parseFloat(props.amountProperty) + parseFloat(notaryPrice);
  } else {
    total =
      parseFloat(props.amountProperty) +
      parseFloat(props.amountWorks) +
      parseFloat(notaryPrice);
  }

  //console.log("total", total);

  let result = Math.ceil((5 / 8) * 100); // progress bar

  return (
    <section>
      <div className="wrapper">
        <h2>Définissons le montant de votre projet</h2>

        <div className="content-box">
          <div className="flex padding bg-grey">
            <div className="inside">
              <label className="title">
                Montant estimé de votre acquisition *
              </label>
              <input
                className="input"
                type="Number"
                placeholder="0"
                value={props.amountProperty}
                onChange={event => {
                  props.setAmountProperty(event.target.value);
                }}
              />
            </div>
            <span className="euro">€</span>
          </div>

          <div className="flex padding">
            <div className="inside">
              <label className="title">Montant estimé des travaux</label>
              <input
                className="input"
                type="Number"
                placeholder="0"
                value={props.amountWorks}
                onChange={event => {
                  props.setAmountWorks(event.target.value);
                }}
              />
            </div>
            <span className="euro">€</span>
          </div>

          <div className="flex padding bg-grey">
            <div className="inside">
              <label className="title">Frais de notaire *</label>
              <input
                className="input"
                type="Number"
                value={notaryPrice}
                onChange={() => {
                  props.setNotary(notaryPrice);
                }}
              />
            </div>
            <span className="euro">€</span>
          </div>

          <div className="flex padding">
            <div className="inside">
              <label className="title">Budget total estimé du projet</label>
              <input
                className="input"
                type="Number"
                placeholder="0"
                value={total}
                onChange={() => {
                  props.setTotal(parseFloat(total));
                }}
              />
            </div>
            <span className="euro">€</span>
          </div>
        </div>

        <div className="step">
          <Link to="/LocationScreen">
            <p className="previous">Précédent</p>
          </Link>
          <div className="bar-grey">
            <div className="bar-orange" style={{ width: result + "%" }} />
            <div className="back-round" style={{ left: result + "%" }}>
              <div className="round">{result}%</div>
            </div>
          </div>
          {props.amountProperty !== undefined ? (
            <Link to="/MailScreen">
              <button
                className="next"
                onClick={() => {
                  props.setAmountWorks(props.amountWorks);
                  props.setNotary(notaryPrice);
                  props.setTotal(total);
                  Cookies.set("AmountProperty", props.amountProperty);
                  Cookies.set("AmountWorks", props.amountWorks);
                  Cookies.set("Notary", notaryPrice);
                  Cookies.set("Total", total);
                }}
              >
                Suivant
              </button>
            </Link>
          ) : (
            <button
              className="next"
              onClick={() => {
                alert("Merci d'indiquer le montant estimé de votre bien");
              }}
            >
              Suivant
            </button>
          )}
        </div>
        <Mentions />
      </div>
    </section>
  );
};

export default AmountScreen;
