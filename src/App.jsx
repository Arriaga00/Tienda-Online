import './App.css'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Inicio from './pages/Inicio';
import TuCarrito from './pages/Tu-carrito';
import Header from './components/Header';
import { useState } from "react";
import Modals from "./components/Modals";
import NoFound from './components/NoFound';
import Registro from './pages/Registro';
import Categorias from './pages/Categorias';

function App() {
  const [abrirModal, setAbrirModal] = useState(false);
  const [usuario,setUsuario] = useState(false)
  const [informacionUsuario,setInformacionUsuario] = useState({
    nombre : '',
    email : '',
    contraseña : ''
  })
  return (
    <>
      <Router>
      <Header logueado={usuario} setAbrirModal={setAbrirModal}  informacionUsuario={informacionUsuario}/>
      <Modals setAbrirModal={setAbrirModal} abrirModal={abrirModal} setUsuario={setUsuario} usuario={usuario} setInformacionUsuario={setInformacionUsuario}/>
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/categorias' element={<Categorias/>} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/tu-carrito' element={<TuCarrito logueado={false}/>} />
          <Route path='*' element={<NoFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
