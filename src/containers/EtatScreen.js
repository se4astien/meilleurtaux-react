import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const EtatScreen = props => {
  // On sauvegarde la page dans un cookie (nom + valeur + durée)
  Cookies.set("CurrentPage", "/EtatScreen", { expires: 7 });

  return (
    <div className="wrapper">
      <Title title="Etat du bien" />
      <div className="content-box flex">
        <InputRadio
          name="Ancien"
          checked={props.etat === "Ancien" ? true : false}
          onChange={event => {
            props.setEtat(event.target.name);
          }}
          className={props.etat === "Ancien" ? "box-selected" : "box"}
        />
        <InputRadio
          name="Neuf"
          checked={props.etat === "Neuf" ? true : false}
          onChange={event => {
            props.setEtat(event.target.name);
          }}
          className={props.etat === "Neuf" ? "box-selected" : "box"}
        />
      </div>
      <Step
        previous="/TypeScreen"
        next="/UsageScreen"
        state={props.etat}
        nameCookie="Etat"
        valueCookie={props.etat}
        namePage="Etat"
        setPages={props.setPages}
        pages={props.pages}
        step={1}
      />
      <Mentions />
    </div>
  );
};

export default EtatScreen;
