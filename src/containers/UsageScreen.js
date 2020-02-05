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
    props.setUse("Résidence Principale");
  };
  const onChangeSecond = () => {
    props.setUse("Résidence Secondaire");
  };
  const onChangeLoc = () => {
    props.setUse("Investissement Locatif");
  };

  return (
    <div className="wrapper">
      <Title title="Usage du bien" />
      <div className="content-box flex">
        <InputRadio
          name="Résidence Principale"
          onChange={onChangePrincipal}
          checked={props.use === "Résidence Principale" ? true : false}
          className={
            props.use === "Résidence Principale" ? "box-selected" : "box"
          }
        />
        <InputRadio
          name="Résidence Secondaire"
          onChange={onChangeSecond}
          checked={props.use === "Résidence Secondaire" ? true : false}
          className={
            props.use === "Résidence Secondaire" ? "box-selected" : "box"
          }
        />
        <InputRadio
          name="Investissement Locatif"
          onChange={onChangeLoc}
          checked={props.use === "Investissement Locatif" ? true : false}
          className={
            props.use === "Investissement Locatif" ? "box-selected" : "box"
          }
        />
      </div>
      <Step
        previous="/EtatScreen"
        next="/SituationScreen"
        state={props.use}
        nameCookie="Usage"
        valueCookie={props.use}
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
