
import React, { useState } from "react";
import Card from "../../cards/Cards";
import MainLayout from "../../layout/MainLayout";

export default function FormProds( {onAddCard} ) {
  const [characters, setCharacters] = useState([]); // Estado para almacenar los personajes

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [location, setLocation] = useState("");
  const [episodes, setEpisodes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() &&
      status.trim() &&
      species.trim() &&
      gender.trim() &&
      origin.trim() &&
      location.trim() &&
      episodes.trim()
    ) {
      const newCharacter = {
        cardId: Date.now(),
        name,
        status,
        species,
        gender,
        origin,
        location,
        episodes,
      };
     const onAddCard = (newCharacter);
      setCharacters([...characters, newCharacter]); // Agregar el nuevo personaje al estado
      setName("");
      setStatus("");
      setSpecies("");
      setGender("");
      setOrigin("");
      setLocation("");
      setEpisodes("");
    }
  };

  return (
    <MainLayout>
      <h1>Formulario Nuevo Producto</h1>
      <form onSubmit={handleSubmit}>
        <ul className="form-list">
        <li><label for="">Nombre :<input type="text"  value={ name } onChange={(e) => setName(e.target.value)} placeholder="Ingrese Un Nombre"/></label></li>
          <li><label for="">Estado :<input type="number" value={ status } onChange={(e) => setStatus(e.target.value)} placeholder="Ingrese Un Precio"/></label></li>
          <li><label for="">Especie :<input type="text" value={species } onChange={(e) => setSpecies(e.target.value)} placeholder="Ingrese C/u en species "/></label></li>
          <li><label for="">Genero :<input type="text" value={ gender } onChange={(e) => setGender(e.target.value)} placeholder="Ingrese Marca"/></label></li>
          <li><label for="">Origen:<input type="text" value={ origin } onChange={(e) => setOrigin(e.target.value)} placeholder="Ingrese Una originoria "/></label></li>
          <li><label for="">Ubicacion :<input type="text" value={ location } onChange={(e) => setLocation(e.target.value)} placeholder=" Descripcion Breve "/></label></li>
          <li><label for="">Episodios :<input type="text" value={ episodes } onChange={(e) => setEpisodes(e.target.value)} placeholder=" Descripcion Detallada "/></label></li>
        </ul>
        <button type="submit">Agregar Producto +</button>
      </form>
      <div className="card-container">
        {/* Renderizar el componente Card para cada personaje en el estado characters */}
        {characters.map((character) => (
          <Card key={character.cardId} character={character} />
        ))}
      </div>
    </MainLayout>
  );
}
