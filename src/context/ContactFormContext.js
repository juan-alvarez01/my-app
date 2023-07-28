import { createContext, useContext, useState } from "react";

const ContactFormContext = createContext();

export function useContactFormContext() {
  return useContext(ContactFormContext);
}

export function ContactFormProvider({ children }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [contacts, setContacts] = useState([]); // Nuevo estado para almacenar los contactos

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "El Nombre es requerido.";
    }

    if (!email.trim()) {
      validationErrors.email = "El E-Mail es requerido.";
    }

    if (!comments.trim()) {
      validationErrors.comments = "Los Comentarios son requeridos.";
    }

    if (Object.keys(validationErrors).length === 0) {
      const newContact = {
        id: Date.now(),
        name,
        email,
        comments,
      };
      setContacts([...contacts, newContact]);
      setName("");
      setEmail("");
      setComments("");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const formState = {
    name,
    setName,
    email,
    setEmail,
    comments,
    setComments,
    handleSubmit,
    errors,
    contacts,
  };

  return (
    <ContactFormContext.Provider value={formState}>
      {children}
    </ContactFormContext.Provider>
  );
}
