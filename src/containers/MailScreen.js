import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
// Import du Component
import Mentions from "../components/Mentions";
// Import du visuel
import Email from "../images/visuel-desktop-email.jpg";

const MailScreen = props => {
  // sauvegarde la page en cours
  Cookies.set("CurrentPage", "/MailScreen", { expires: 7 });

  // Checkbox : false au départ
  const [verif, setVerif] = useState(false);

  const fetchData = async () => {
    try {
      // On envoie les éléménts à la BDD
      const response = await axios.post(
        "https://meilleurtaux-node.herokuapp.com/createprojet",
        {
          type: props.type,
          state: props.etat,
          use: props.use,
          situation: props.situation,
          country: props.country,
          city: props.city,
          amountProperty: props.amountProperty,
          amountWorks: props.amountWorks,
          notary: props.notary,
          total: props.total,
          mail: props.mail
        }
      );
      props.setDossier(response.data);
    } catch (error) {}
  };

  let result = Math.ceil((6 / 8) * 100);
  return (
    <section>
      <div className="wrapper">
        <h2>Vos Coordonnées</h2>
        <div className="flex">
          <div className="message">
            <p>
              Un devis vous sera envoyé par mail avec un récapitulatif de votre
              demande.
            </p>
          </div>
          <img src={Email} alt="visuel desktop email" />
        </div>
        <div className="content-box">
          <div className="flex padding bg-grey">
            <div className="inside">
              <label>Adresse e-mail emprunteur *</label>
              <input
                className="input"
                type="text"
                value={props.mail === undefined ? null : props.mail}
                onChange={event => {
                  props.setMail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex validate">
            <input
              type="checkbox"
              value={verif}
              onChange={event => {
                setVerif(event.target.checked);
              }}
            />
            <span>
              J'accepte de recevoir par email des propositions de Meilleurtaux.
            </span>
          </div>
        </div>

        <div className="step">
          <Link to="/AmountsScreen">
            <p
              className="previous"
              // onClick={() => {
              //   Cookies.set("Mail", props.mail);
              // }}
            >
              Précédent
            </p>
          </Link>
          <div className="bar-grey">
            <div className="bar-orange" style={{ width: result + "%" }} />
            <div className="back-round" style={{ left: result + "%" }}>
              <div className="round">{result}%</div>
            </div>
          </div>

          {props.mail === "" ? (
            <p
              className="next"
              onClick={() => {
                alert("Merci de renseigner une adresse e-mail");
              }}
            >
              Valider
            </p>
          ) : verif === false ? (
            <button
              className="next"
              onClick={() => {
                alert(
                  "Merci d'accepter de recevoir les e-mails de Meilleurtaux"
                );
              }}
            >
              Valider
            </button>
          ) : (
            <Link to="FinishScreen">
              <button
                className="next"
                onClick={() => {
                  // Au click sur Suivant
                  fetchData(); // On envoie les données
                  // Et on supprime les cookies
                  Cookies.remove("Usage");
                  Cookies.remove("Type");
                  Cookies.remove("Situation");
                  Cookies.remove("Notary");
                  Cookies.remove("Location");
                  Cookies.remove("Etat");
                  Cookies.remove("AmountProperty");
                  Cookies.remove("AmountWorks");
                  Cookies.remove("Mail");
                  Cookies.remove("Total");
                  Cookies.remove("CurrentPage");
                }}
              >
                Valider
              </button>
            </Link>
          )}
        </div>
        <Mentions />
      </div>
    </section>
  );
};

export default MailScreen;
