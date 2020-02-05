import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// Import des containers
import Step from "../components/Step";
import Mentions from "../components/Mentions";

const LocationScreen = props => {
  // on sauvegarde la page
  Cookies.set("CurrentPage", "/LocationScreen", { expires: 7 });
  // On initialise le code postal
  const [zip, setZip] = useState(Cookies.get("Location"));
  // On initialise la liste des codes postaux à tableau vide
  const [zipList, setZipList] = useState([]);

  const fetchData = async () => {
    try {
      // on fait appel à l'API
      const response = await axios.get(
        `https://vicopo.selfbuild.fr/cherche/${zip}`
      );
      setZipList(response.data.cities);
      console.log(response.data.cities);
    } catch (error) {
      console.log("error message", error.message);
    }
  };

  useEffect(() => {
    // Si le code postal existe
    if (zip !== "") {
      // exécute l'appel à l'API
      fetchData();
    }
  }, [zip]); // on demande à React de déclencher l'événement au moment où on rempli l'input

  // tableau qui va contenir la liste des villes
  const arrayCity = [];
  // Si la ville existe
  if (zipList !== undefined) {
    for (let i = 0; i < zipList.length; i++) {
      arrayCity.push(zipList[i].city + " (" + zipList[i].code + ")");
    }
  }

  // input qui va contenir la ville sélectionné
  const result = [];
  for (let j = 0; j < arrayCity.length; j++) {
    result.push(
      <li
        key={j}
        onClick={() => {
          props.setCity(arrayCity[j]);
          setZip(arrayCity[j]);
        }}
      >
        {arrayCity[j]}
      </li>
    );
  }

  return (
    <section>
      <div className="wrapper">
        <h2>Où se situe le bien à financer ?</h2>
        <div className="content-box">
          <div className="flex padding bg-grey ">
            <div className="inside">
              <label>Dans quel pays se situe votre projet ? *</label>
              <select className="boxSelect">
                <option value="France">France</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="flex padding">
            <div className="inside">
              <label>Ville ou code postal *</label>
              <input
                className="input-select"
                value={zip}
                onChange={event => {
                  setZip(event.target.value);
                  props.setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="inside cities-list">
            <ul>{result}</ul>
          </div>
        </div>
        <div className="infoZip">
          <p>
            La connaissance du code postal du bien permettra de calculer les
            frais de notaire selon les conditions en vigueur dans le département
            concerné.
          </p>
          <p>
            Si vous êtes en recherche de bien sur plusieurs communes, indiquez
            une commune ciblée.
          </p>
        </div>
        <Step
          previous="/SituationScreen"
          next="/AmountsScreen"
          state={props.city}
          nameCookie="Location"
          valueCookie={zip}
          step={4}
        />
        <Mentions />
      </div>
    </section>
  );
};

export default LocationScreen;
