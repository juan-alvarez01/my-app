import React, { useState } from "react";
import './Cards.css'


const Card = ({ character, onDetailClick }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <button onClick={() => onDetailClick(character)}>Detalle</button>
    </div>
  );
};

export default Card;