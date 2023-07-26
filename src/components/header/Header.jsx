import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormProds from '../templates/formProds/FormProds';
import ContactForm from '../templates/contact/Contact';
import About from '../templates/about/about';


const Header = () => {
  const [contacts, setContacts] = useState([]);
  const [cards, setCards] = useState([]);

  const onAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const onAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };
  
  return (
    <Router>
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/alta">Alta</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/alta" element={<FormProds  onAddCard={onAddCard}  />} />
        <Route path="/contacto" element={<ContactForm onAddContact={onAddContact}/>} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
};

export default Header;