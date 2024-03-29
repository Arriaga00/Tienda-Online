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
import DetalleCard from './components/DetalleCard';

function App() {
  const [filtrado, setFiltrado] = useState('')
  const [abrirModal, setAbrirModal] = useState(false);
  const [usuario,setUsuario] = useState(false)
  const [informacionUsuario,setInformacionUsuario] = useState({
    email : '',
    contraseña : ''
  })
  return (
    <>
      <Router>
      <Header logueado={usuario} setAbrirModal={setAbrirModal}  informacionUsuario={informacionUsuario}  setFiltrado={setFiltrado}/>
      <Modals setAbrirModal={setAbrirModal} abrirModal={abrirModal} setUsuario={setUsuario} usuario={usuario} setInformacionUsuario={setInformacionUsuario}/>
        <Routes>
          <Route path='/' element={<Inicio  filtrado={filtrado}/>}/>
          <Route path='/categorias' element={<Categorias/>} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/tu-carrito' element={<TuCarrito logueado={false}/>} />
          <Route path='/:name' element={<DetalleCard/>}/> 
          <Route path='*' element={<NoFound/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
