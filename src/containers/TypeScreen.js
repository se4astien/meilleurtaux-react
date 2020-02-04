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

  // fonction pour mettre à jour l'état de 'type'
  const onChangeHouse = () => {
    props.setType("Maison");
  };
  const onChangeAppartment = () => {
    props.setType("Appartement");
  };

  return (
    <div className="wrapper">
      <Title title="Type de bien" />
      <div className="content-box flex">
        <InputRadio
          name="Maison"
          onChange={onChangeHouse}
          checked={props.type === "Maison" ? true : false}
          className={props.type === "Maison" ? "box-selected" : "box"}
        />
        <InputRadio
          name="Appartement"
          onChange={onChangeAppartment}
          checked={props.type === "Appartement" ? true : false}
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
