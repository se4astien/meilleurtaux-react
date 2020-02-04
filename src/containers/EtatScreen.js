import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const EtatScreen = props => {
  // On sauvegarde le cookie (nom + valeur + durée)
  Cookies.set("CurrentPage", "/EtatScreen", { expires: 7 });

  const onChangeOld = () => {
    props.setEtat("Ancien");
  };
  const onChangeNew = () => {
    props.setEtat("Neuf");
  };
  return (
    <div className="wrapper">
      <Title title="Etat du bien" />
      <div className="content-box flex">
        <InputRadio
          name="Ancien"
          onChange={onChangeOld}
          checked={props.etat === "Ancien" ? true : false}
          className={props.etat === "Ancien" ? "box-selected" : "box"}
        />
        <InputRadio
          name="Neuf"
          onChange={onChangeNew}
          checked={props.etat === "Neuf" ? true : false}
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
