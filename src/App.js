import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Quienessomos from './components/Quienessomos';
import Campamentos from './components/Campamentos';
import Contacto from './components/Contacto';
import Donar from './components/Donar';
import Nexcognita from './components/Nexcognita';
import Lemniscato from './components/Lemniscato';



function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nacionciencia" element={<Inicio />} />
        <Route path="/quienessomos" element={<Quienessomos />} />
        <Route path="/campamentos" element={<Campamentos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/nexcognita" element={<Nexcognita />} />
        <Route path="/lemniscato" element={<Lemniscato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;