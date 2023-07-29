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
     <img src="/Media/Gif/Rick-Morty-Banner.gif" alt="Rick && Morty"/>
      <div className="character-list">
        {selectedCharacter && (
        <CardDetailLayout
          character={selectedCharacter}
          onCloseClick={handleDetailClose}
        />
      )}
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            onDetailClick={handleDetailClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
