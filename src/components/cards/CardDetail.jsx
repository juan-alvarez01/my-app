import React from "react";
import './Cards.css'

const CardDetailLayout = ({ character, onCloseClick }) => {
  return (
    <div className="card">
      <h1>Personaje Seleccionado</h1>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>Episodes:</p>
      <select>
        {character.episode.map((episode) => (
          <option key={episode}>{episode}</option>
        ))}
      </select>
      <button onClick={onCloseClick}>Cerrar</button>
    </div>
  );
};
export default CardDetailLayout;
