import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const TypeScreen = props => {
  // On sauvegarde le cookie pendant 7 jours
  Cookies.set("CurrentPage", "/TypeScreen", { expires: 7 });

  return (
    <div className="wrapper">
      <Title title="Type de bien" />
      <div className="content-box flex">
        <InputRadio
          name="Maison"
          // Si le type est égal à maison
          checked={props.type === "Maison" ? true : false}
          // On met à jour la valeur type
          onChange={event => {
            props.setType(event.target.checked);
          }}
          className={props.type === "Maison" ? "box-selected" : "box"}
        />
        <InputRadio
          name="Appartement"
          checked={props.type === "Appartement" ? true : false}
          onChange={event => {
            props.setType(event.target.checked);
          }}
          className={props.type === "Appartement" ? "box-selected" : "box"}
        />
      </div>
      <Step
        next="/EtatScreen"
        state={props.type}
        nameCookie="Type"
        valueCookie={props.type}
        namePage="Type"
        pages={props.pages}
        setPages={props.setPages}
        step={0}
      />
      <Mentions />
    </div>
  );
};
export default TypeScreen;
