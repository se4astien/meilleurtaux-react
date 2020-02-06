import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const TypeScreen = props => {
  // On sauvegarde la page dans un cookie pendant 7 jours
  Cookies.set("CurrentPage", "/TypeScreen", { expires: 7 });

  return (
    <div className="wrapper">
      <Title title="Type de bien" />
      <div className="content-box flex">
        <InputRadio
          name="Maison"
          // Permet de vérifier si le bouton radio est coché ou non
          checked={props.type === "Maison" ? true : false}
          // On met à jour la valeur type
          onChange={event => {
            props.setType(event.target.name);
          }}
          className={props.type === "Maison" ? "box-selected" : "box"}
        />
        <InputRadio
          name="Appartement"
          // Permet de vérifier si le bouton radio est coché ou non
          checked={props.type === "Appartement" ? true : false}
          onChange={event => {
            props.setType(event.target.name);
          }}
          className={props.type === "Appartement" ? "box-selected" : "box"}
        />
      </div>
      <Step
        // On envoie plusieurs paramètres à Step
        next="/EtatScreen" // page suivante
        state={props.type} // la valeur de type
        nameCookie="Type" // le nom du cookie
        valueCookie={props.type} // la valeur du cookie
        namePage="Type" // le nom de la page
        step={0}
      />
      <Mentions />
    </div>
  );
};
export default TypeScreen;
