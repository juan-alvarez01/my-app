import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children,  addCharacter }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [location, setLocation] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => { 
    e.preventDefault();
    const validationErrors = {};

    if (!image.trim()) {
        validationErrors.image = "La imagen es requerida.";
      }
  
      if (!name.trim()) {
        validationErrors.name = "El nombre es requerido.";
      }
  
      if (!status.trim()) {
        validationErrors.status = "El estado es requerido.";
      }
  
      if (!species.trim()) {
        validationErrors.species = "La especie es requerida.";
      }
  
      if (!gender.trim()) {
        validationErrors.gender = "El género es requerido.";
      }
  
      if (!origin.trim()) {
        validationErrors.origin = "El origen es requerido.";
      }
  
      if (!location.trim()) {
        validationErrors.location = "La locación es requerida.";
      }
  
      if (!episodes.trim()) {
        validationErrors.episodes = "El episodio es requerido.";
      }

    if (Object.keys(validationErrors).length === 0) {
      addCharacter({
        id: Date.now(),
        image,
        name,
        status,
        species,
        gender,
        origin,
        location,
        episodes,
      });
      setImage("");
      setName("");
      setStatus("");
      setSpecies("");
      setGender("");
      setOrigin("");
      setLocation("");
      setEpisodes("");
      setErrors({});
    } else {
      
      setErrors(validationErrors);
    }
  };

  const formState = {
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
  };

  return <FormContext.Provider value={formState}>{children}</FormContext.Provider>;
}
