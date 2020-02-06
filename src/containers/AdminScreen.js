import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AdminScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [folders, setFolders] = useState([]);
  const [password, setPassword] = useState(Cookies.get("Password")); // Password vaudra "tothemoon"
  // const [password, setPassword] = useState("tothemoon");
  const [watchPassword, setWatchPassword] = useState(false);

  const fetchData = async () => {
    try {
      // On récupère la liste des dossiers
      const response = await axios.get(
        "https://meilleurtaux-back.herokuapp.com/search"
      );
      setFolders(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // Création du composant useEffect()
  useEffect(() => {
    fetchData(); // On exécute la fonction fetchData()
  }, []); // le tableau vide est un argument qui permet de déclencher le contenu de la fonction uniquement à l'étape de la création du composant

  // Fonction qui permet de supprimer une entrée de la BDD
  const removeData = async id => {
    try {
      const responseBis = await axios.post(
        `https://meilleurtaux-back.herokuapp.com/delete/${id}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading === false ? (
        // Au départ les données ne sont pas chargées => on demande à l'utilisateur de rentrer un mot de passe
        <div className="admin">
          <form>
            <div>
              <label>Votre mot de passe : </label>
              <input
                className="admin-access"
                type={watchPassword === true ? "text" : "password"}
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  // Si le mot de passe est correct, on passe loading à true
                  setIsLoading(password === "tothemoon" && true);
                  // sauvegarde le mot de passe pendant 7 jours
                  Cookies.set("password", password, { expires: 7 });
                }}
              >
                GO !
              </button>
            </div>
            <div>
              <label>Afficher le mot de passe</label>
              <input
                type="checkbox"
                value={watchPassword}
                onChange={event => {
                  setWatchPassword(event.target.checked);
                }}
              />
            </div>
          </form>
        </div>
      ) : (
        // On rentre dans le cas où isLoading est égal à true
        <div className="wrapper">
          <h2>Tableau de bord</h2>
          <div className="dashboard">
            <ul className="tab">
              <li>Code Postal / Ville</li>
              <li>Adresse e-mail</li>
              <li>Type de bien</li>
              <li>Etat du bien</li>
              <li>Montant total</li>
              <li>Supprimer le dossier</li>
            </ul>
            <ul className="folders-list">
              {folders.map((folder, index) => {
                return (
                  <li>
                    <ul>
                      <div>
                        <Link to={`/search/${folder._id}`}>
                          <li>{folder.city}</li>
                          <li>{folder.mail}</li>
                          <li>{folder.type}</li>
                          <li>{folder.state}</li>
                          <li>{folder.total} €</li>
                        </Link>
                      </div>
                      <div>
                        <li
                          onClick={() => {
                            // on éxcute la fonction removeData à partir de l'id
                            removeData(folder._id);
                            // on crée une copie du tableau 'folders'
                            const newFolders = [...folders];
                            // on supprime un élément à l'index correspondant
                            newFolders.splice(index, 1);
                            // 'folders' est maintenant égal à 'newFolders'
                            setFolders(newFolders);
                          }}
                        >
                          <span classname="remove" aria-label="" role="img">
                            ❌
                          </span>
                        </li>
                      </div>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminScreen;
