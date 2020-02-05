import React from "react";
import Cookies from "js-cookie";

// Import des components
import Title from "../components/Title";
import InputRadio from "../components/InputRadio";
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const SituationScreen = props => {
  Cookies.set("CurrentPage", "/SituationScreen", { expires: 7 });

  return (
    <div className="wrapper">
      <Title title="Votre situation actuelle" />
      <div className="content-box flex">
        <InputRadio
          name={"Locataire"}
          checked={props.situation === "Locataire" ? true : false}
          onChange={event => {
            props.setSituation(event.target.name);
          }}
          className={props.situation === "Locataire" ? "box-selected" : "box"}
        />
        <InputRadio
          name={"Propriétaire"}
          checked={props.situation === "Propriétaire" ? true : false}
          onChange={event => {
            props.setSituation(event.target.name);
          }}
          className={
            props.situation === "Propriétaire" ? "box-selected" : "box"
          }
        />
        <InputRadio
          name={"Bénéficiaire d'un logement de fonction"}
          checked={
            props.situation === "Bénéficiaire d'un logement de fonction"
              ? true
              : false
          }
          onChange={event => {
            props.setSituation(event.target.name);
          }}
          className={
            props.situation === "Bénéficiaire d'un logement de fonction"
              ? "box-selected"
              : "box"
          }
        />
        <InputRadio
          name={"Hébergé à titre gratuit"}
          onChange={event => {
            props.setSituation(event.target.name);
          }}
          checked={props.situation === "Hébergé à titre gratuit" ? true : false}
          className={
            props.situation === "Hébergé à titre gratuit"
              ? "box-selected"
              : "box"
          }
        />
      </div>
      <Step
        previous="/UsageScreen"
        next="/LocationScreen"
        state={props.situation}
        nameCookie="Situation"
        valueCookie={props.situation}
        namePage="Situation"
        setPages={props.setPages}
        pages={props.pages}
        step={3}
      />
      <Mentions />
    </div>
  );
};

export default SituationScreen;
