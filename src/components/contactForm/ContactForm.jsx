import React from "react";
import { useContactFormContext } from "../../context/ContactFormContext";
import './ContactForm.css'

export default function ContactForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    comments,
    setComments,
    handleSubmit,
    errors,
    contacts,
  } = useContactFormContext();

  return (
    <>
      <h1>Formulario De Contacto</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa Tu Nombre"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa Tu Email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comentarios:</label>
          <input
            type="text"
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Ingresa Tus Comentarios"
          />
          {errors.comments && <p className="error-message">{errors.comments}</p>}
        </div>
        <button type="submit">Agregar</button>
      </form>
    </>
  );
}
