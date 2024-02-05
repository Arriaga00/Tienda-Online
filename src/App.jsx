import './App.css'
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Inicio from './pages/Inicio';
import TuCarrito from './pages/Tu-carrito';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Header/>
          <Route path='/' element={<Inicio />}/>
          <Route path='/acerca-de-nosotros' element />
          <Route path='/categorias' element />
          <Route path='/tu-carrito' element={<TuCarrito/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
