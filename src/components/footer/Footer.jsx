import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormProds from '../templates/formProds/FormProds';
import ContactForm from '../templates/contact/Contact';
import About from '../templates/about/about';

export default function Footer(params) {
   
  return  ( 
    <Router>
    <div>
      <ul>
        <li>
          <h1>Inicio</h1>
        </li>
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
    </div>
    <Routes>
      <Route path="/alta" element={<FormProds />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/nosotros" element={<About />} />
    </Routes>
  
    <div>
      <ul>
        <li><i ></i><p>Ubicacion</p></li>
        <li><i></i><p>Numero</p></li>
        <li><i ></i><p>Correo electronico</p></li>
        <li><i></i><p>Horarios</p></li>
      </ul>
    </div>
</Router>
  ) 
}