import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Import Containers
import TypeScreen from "./containers/TypeScreen";
import EtatScreen from "./containers/EtatScreen";
import UsageScreen from "./containers/UsageScreen";
import SituationScreen from "./containers/SituationScreen";
import LocationScreen from "./containers/LocationScreen";
import AmountsScreen from "./containers/AmountsScreen";
import MailScreen from "./containers/MailScreen";
import FinishScreen from "./containers/FinishScreen";
import AdminScreen from "./containers/AdminScreen";
import AdminIdScreen from "./containers/AdminIdScreen";

// Import Components
import Header from "./components/Header";

function App() {
  // Initialisation des states
  // --- Screen 01
  const [type, setType] = useState(Cookies.get("Type"));
  // --- Screen 02
  const [etat, setEtat] = useState(Cookies.get("Etat"));
  // --- Screen 03
  const [use, setUse] = useState(Cookies.get("Usage"));
  // --- Screen 04
  const [situation, setSituation] = useState(Cookies.get("Situation"));
  // --- Screen 05
  const [country, setCountry] = useState("France"); // Pays
  const [city, setCity] = useState(Cookies.get("Location")); // Ville
  // --- Screen 06
  const [amountProperty, setAmountProperty] = useState(
    Cookies.get("AmountProperty")
  );
  const [amountWorks, setAmountWorks] = useState(Cookies.get("AmountWorks"));
  const [notary, setNotary] = useState(Cookies.get("Notary"));
  const [total, setTotal] = useState(Cookies.get("Total"));
  // --- Screen 07
  const [mail, setMail] = useState(Cookies.get("Mail"));
  // --- Affiche le numéro du dossier
  const [dossier, setDossier] = useState("");
  // --- permet de sauvegarder la page en cours si l'utilisateur ferme l'onglet
  const [pages, setPages] = useState(Cookies.get("CurrentPage"));

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={pages === undefined ? "/TypeScreen" : pages} />
        </Route>
        <Route path="/TypeScreen">
          <TypeScreen
            type={type}
            setType={setType}
            pages={pages}
            setPages={setPages}
          />
        </Route>
        <Route path="/EtatScreen">
          <EtatScreen etat={etat} setEtat={setEtat} setPages={setPages} />
        </Route>
        <Route path="/UsageScreen">
          <UsageScreen use={use} setUse={setUse} />
        </Route>
        <Route path="/SituationScreen">
          <SituationScreen situation={situation} setSituation={setSituation} />
        </Route>
        <Route path="/LocationScreen">
          <LocationScreen
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
          />
        </Route>
        <Route path="/AmountsScreen">
          <AmountsScreen
            etat={etat}
            amountProperty={amountProperty}
            setAmountProperty={setAmountProperty}
            amountWorks={amountWorks}
            setAmountWorks={setAmountWorks}
            notary={notary}
            setNotary={setNotary}
            total={total}
            setTotal={setTotal}
          />
        </Route>
        <Route path="/MailScreen">
          <MailScreen
            mail={mail}
            setMail={setMail}
            type={type}
            etat={etat}
            use={use}
            situation={situation}
            country={country}
            city={city}
            amountProperty={amountProperty}
            amountWorks={amountWorks}
            notary={notary}
            total={total}
            setDossier={setDossier}
          />
        </Route>
        <Route path="/FinishScreen">
          <FinishScreen dossier={dossier} />
        </Route>
        <Route path="/Admin">
          <AdminScreen />
        </Route>
        <Route path="/search/:id">
          <AdminIdScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
