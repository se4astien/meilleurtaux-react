import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const AdminIdScreen = props => {
  let { id } = useParams(); // On récupère l'id
  const [folderById, setFolderById] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://meilleurtaux-back.herokuapp.com/search/${id}`
      );
      setFolderById(response.data);
      console.log("HERE", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <ul className="folder-desc">
        <li>
          Dossier numéro : <span className="ref">{folderById.total}</span>
        </li>
        <li>
          Type de bien : <span>{folderById.type}</span>
        </li>
        <li>
          Etat du bien : <span>{folderById.state}</span>
        </li>
        <li>
          Usage du bien : <span>{folderById.use}</span>
        </li>
        <li>
          Situation actuelle : <span>{folderById.situation}</span>
        </li>
        <li>
          Pays : <span>{folderById.country}</span>
        </li>
        <li>
          Ville et Code Postal : <span>{folderById.city}</span>
        </li>
        <li>
          Montant estimé de votre acquisition :
          <span> {folderById.amountProperty} €</span>
        </li>
        <li>
          Montant estimé des travaux : <span>{folderById.amountWorks} €</span>
        </li>
        <li>
          Frais de notaire : <span>{folderById.notary} €</span>
        </li>
        <li>
          Total : <span>{folderById.total} €</span>
        </li>
        <li>
          Adresse e-mail : <span>{folderById.mail}</span>
        </li>
      </ul>

      <div className="return">
        <Link to="/Admin">
          <span>Retour</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminIdScreen;
