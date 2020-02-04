import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const UseScreen = props => {
  Cookies.set("CurrentPage", "/UsageScreen", { expires: 7 });

  // fonction pour mettre à jour l'état 'use'
  const onChangePrincipal = () => {
    props.setUsage("Résidence Principale");
  };
  const onChangeSecond = () => {
    props.setUsage("Résidence Secondaire");
  };
  const onChangeLoc = () => {
    props.setUsage("Investissement Locatif");
  };

  return (
    <div className="wrapper">
      <Title title="Usage du bien" />
      <div className="content-box flex">
        <InputRadio
          name="Résidence Principale"
          onChange={onChangePrincipal}
          checked={props.usage === "Résidence Principale" ? true : false}
          className={
            props.usage === "Résidence Principale" ? "box-selected" : "box"
          }
        />
        <InputRadio
          name="Résidence Secondaire"
          onChange={onChangeSecond}
          checked={props.usage === "Résidence Secondaire" ? true : false}
          className={
            props.usage === "Résidence Secondaire" ? "box-selected" : "box"
          }
        />
        <InputRadio
          name="Investissement Locatif"
          onChange={onChangeLoc}
          checked={props.usage === "Investissement Locatif" ? true : false}
          className={
            props.usage === "Investissement Locatif" ? "box-selected" : "box"
          }
        />
      </div>
      <Step
        previous="/EtatScreen"
        next="/SituationScreen"
        state={props.usage}
        nameCookie="Usage"
        valueCookie={props.usage}
        namePage="Usage"
        setPages={props.setPages}
        pages={props.pages}
        step={2}
      />
      <Mentions />
    </div>
  );
};

export default UseScreen;
