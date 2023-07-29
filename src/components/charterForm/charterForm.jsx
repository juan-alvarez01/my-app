import React from "react";
import { useFormContext } from "../../context/FormContext";
import "./CharacterForm.css";

export default function CharacterForm() {
  const {
    image,
    setImage,
    name,
    setName,
    status,
    setStatus,
    species,
    setSpecies,
    gender,
    setGender,
    origin,
    setOrigin,
    location,
    setLocation,
    episodes,
    setEpisodes,
    handleSubmit,
    errors,
    addCharacter,
  } = useFormContext();

  return (
    <>
      <h1 >Formulario De Personaje</h1>
      <form onSubmit={handleSubmit} className="character-form">
        <ul>
          <li>
          <label htmlFor="name">Url Imagen: </label>
            {errors.image && <p>{errors.image}</p>}
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ingrese una url de imagen"
            />
          </li>
          <li>
            <label htmlFor="name">Nombre: </label>
            {errors.name && <p>{errors.name}</p>}
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese un Nombre"
            />
          </li>
          <li>
            <label htmlFor="status">Estado: </label>
            {errors.status && <p>{errors.status}</p>}
            <input
              type="text"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Ingrese un Estado"
            />
          </li>
          <li>
            <label htmlFor="species">Especie: </label>
            {errors.species && <p>{errors.species}</p>}
            <input
              type="text"
              id="species"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              placeholder="Ingrese una Especie"
            />
          </li>
          <li>
            <label htmlFor="gender">Genero: </label>
            {errors.gender && <p>{errors.gender}</p>}
            <input
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Ingrese un Genero"
            />
          </li>
          <li>
            <label htmlFor="origin">Origen: </label>
            {errors.origin && <p>{errors.origin}</p>}
            <input
              type="text"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Ingrese un Origen"
            />
          </li>
          <li>
            <label htmlFor="location">Locacion: </label>
            {errors.location && <p>{errors.location}</p>}
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ingrese una Locacion"
            />
          </li>
          <li>
            <label htmlFor="episodes">Episodios: </label>
            {errors.episodes && <p>{errors.episodes}</p>}
            <input
              type="text"
              id="episodes"
              value={episodes}
              onChange={(e) => setEpisodes(e.target.value)}
              placeholder="Ingrese un episodio"
            />
          </li>
        </ul>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}
