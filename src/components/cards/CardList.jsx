import React, { useState, useEffect } from "react";
import CharacterCard from "./Cards";
import CardDetailLayout from "../cards/CardDetail";


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleDetailClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleDetailClose = () => {
    setSelectedCharacter(null);
  };

  return (
    <div class="character-list">
      <h2>Personajes De Rick and Morty</h2>
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onDetailClick={handleDetailClick}
          />
        ))}
      </div>
      {selectedCharacter && (
        <CardDetailLayout
          character={selectedCharacter}
          onCloseClick={handleDetailClose}
        />
      )}
    </div>
  );
};

export default CharacterList;
