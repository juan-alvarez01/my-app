import React, { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
  if(name.trim() && email.trim() && comments.trim()){
const newContact = {
         contactId: Date.now(),
            name, email, comments  
        };
        onAddContact(newContact);
        setName('');
        setEmail('');
        setComments('');
    }
};
    return <>
         <h1>Formulario De Contacto</h1>
    <form onSubmit = { handleSubmit }>
      <ul >
        <li><label for="">Nombre: <input id="u-name" type="text"  value={ name } onChange={(e) => setName(e.target.value)}/></label></li>
        <li><label for="">E-Mail: <input id="u-mail" type="text"  value={ email} onChange={(e) => setEmail(e.target.value)}/></label></li>
        <li><label for="">Comentarios: <input id="u-coment" type="text"  value={ comments } onChange={(e) => setComments(e.target.value)}/></label></li>
        <button type="submit" >Enviar</button>
      </ul>
    </form>
    </>
}
export default ContactForm;