import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const AdminScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [doss, setDoss] = useState([]);
  const [password, setPassword] = useState(Cookies.get("Password"));
  const [watchPassword, setWatchPassword] = useState(false);
  console.log("password", password);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://meilleurtaux-node.herokuapp.com/search"
      );
      setDoss(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeData = async id => {
    try {
      const responseBis = await axios.post(
        "https://meilleurtaux-node.herokuapp.com/delete/" + id
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading === false ? (
        <>
          <input
            className="inputAccesAdmin "
            type={watchPassword === false ? "password" : "text"}
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />

          <button
            onClick={() => {
              setIsLoading(password === "tothemoon" && true);
              // sauvegarde le mot de passe pendant 7 jours
              Cookies.set("password", password, { expires: 7 });
            }}
          >
            GO !
          </button>
          <label>
            <input
              type="checkbox"
              value={watchPassword}
              onChange={event => {
                setWatchPassword(event.target.checked);
              }}
            />
            Afficher le mot de passe
          </label>
        </>
      ) : (
        <div className="body">
          <div className="wrapper">
            <p>Bonjour Admin Screen</p>
            <table>
              <tr className="topArray">
                <td>Code Postal/Ville</td>
                <td>Adresse e-mail</td>
                <td>Type de bien</td>
                <td>Montant total</td>
                <td>Supprimer le dossier</td>
              </tr>
            </table>
            {doss.map((dossierImmo, index) => {
              return (
                <div className="array">
                  <Link to={"/search/" + dossierImmo._id}>
                    <table>
                      <tr>
                        <td>{dossierImmo.city}</td>
                        <td>{dossierImmo.mail}</td>
                        <td>{dossierImmo.type}</td>
                        <td>{dossierImmo.total} €</td>
                      </tr>
                    </table>
                  </Link>
                  <table className="deleteDoss">
                    <tr>
                      <td
                        onClick={() => {
                          removeData(dossierImmo._id);
                          const tempDoss = [...doss];
                          tempDoss.splice(index, 1);
                          setDoss(tempDoss);
                        }}
                      >
                        ❌
                      </td>
                    </tr>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminScreen;
