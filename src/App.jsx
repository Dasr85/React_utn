import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './componentes/header/header';
import Seccion from './componentes/seccion/seccion';
import Footer from './componentes/footer/footer';
import GestionPropuesta from './componentes/propuesta/GestionPropuesta';
import ContactForm from './componentes/contacto/contacto';

function App() {

  return (
    <>
      <Router>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/Propuesta" element={<GestionPropuesta />} />
            <Route path="/Contacto" element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

    </>
  )
}

export default App
