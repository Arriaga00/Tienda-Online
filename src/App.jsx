import './App.css'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Inicio from './pages/Inicio';
import TuCarrito from './pages/Tu-carrito';
import Header from './components/Header';
import { useState } from "react";
import Modals from "./components/Modals";

function App() {
  const [abrirModal, setAbrirModal] = useState(false);
  return (
    <>
      <Router>
      <Header logueado={false} setAbrirModal={setAbrirModal} />
      <Modals setAbrirModal={setAbrirModal} abrirModal={abrirModal} />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/acerca-de-nosotros' element />
          <Route path='/categorias' element />
          <Route path='/tu-carrito' element={<TuCarrito logueado={false}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
