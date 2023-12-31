import React, { useEffect, useState } from "react";
import "./card.css";
import { GET_SPECIES_BY_ID } from "../../../environments/environment";
import { useHref, useLocation, Link } from "react-router-dom";

function Card({ card }) {
  const [infoPokemon, setInfoPokemon] = useState({});
  const [infoSpecies, setInfoSpecies] = useState({});
  const [typeInfo, setTypeInfo] = useState([]);
  const urlActual = useHref();
  const URL = card.url.split("/");

  useEffect(() => {
    getInfoPokemonById();
    getInfoSpeciesById();
  }, []);

  const getInfoPokemonById = async () => {
    const response = await fetch(card.url)
      .then((res) => res.json())
      .then((data) => {
        setInfoPokemon(data);
        setTypeInfo(data.types);
      })
      .catch((error) => console.error("Error:", error));
  };

  const getInfoSpeciesById = async () => {
    const response = await fetch(`${GET_SPECIES_BY_ID}/${URL[6]}`)
      .then((res) => res.json())
      .then((data) => {
        setInfoSpecies(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Link className="link" to={`pokemon/${URL[6]}`}>
      <div className="card">
        <strong className="id-container">{`# ${infoPokemon.id}`}</strong>
        <img
          src={infoPokemon?.sprites?.other["official-artwork"]?.front_default}
          alt="foto pokemon"
        />
        <div className="subcard">
          <h4>{infoPokemon.name}</h4>
          <div className="type">
            {typeInfo.map((typeInfo, index) => (
              <p className={`color-${typeInfo.type.name}`} key={index}>{typeInfo.type.name}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
