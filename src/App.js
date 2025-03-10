import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import Nav from './componentes/Nav';
import NuestrosTrabajos from './componentes/NuestrosTrabajos';
import Nosotros from './componentes/Nosotros';

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/nuestrostrabajos" element={<NuestrosTrabajos></NuestrosTrabajos>} />
        <Route path='/nosotros' element={<Nosotros></Nosotros>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
