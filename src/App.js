import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Seccion1 from './components/Seccion1';
import Campamentos from './components/Campamentos';
import Contacto from './components/Contacto';
import Donar from './components/Donar';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={Inicio()} />
        <Route path="/quienessomos" element={Seccion1()} />
        <Route path="/campamentos" element={Campamentos()} />
        <Route path="/contacto" element={Contacto()} />
        <Route path="/donar" element={Donar()} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;